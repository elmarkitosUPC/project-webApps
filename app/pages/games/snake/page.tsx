"use client";
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useInterval from '@use-it/interval';
import "../snake/style.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
    faStar,
    faArrowUp,
    faArrowRight,
    faArrowDown,
    faArrowLeft,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
    faStar,
    faArrowUp,
    faArrowRight,
    faArrowDown,
    faArrowLeft,
    faTrophy,
    faGithub
);
config.autoAddCss = false;

type Apple = {
    x: number;
    y: number;
};

type Velocity = {
    dx: number;
    dy: number;
};

export default function Page_Snake() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasWidth = 500;
    const canvasHeight = 380;
    const canvasGridSize = 20;

    const minGameSpeed = 10;
    const maxGameSpeed = 15;

    const [gameDelay, setGameDelay] = useState<number>(1000 / minGameSpeed);
    const [countDown, setCountDown] = useState<number>(4);
    const [running, setRunning] = useState(false);
    const [isLost, setIsLost] = useState(false);
    const [highscore, setHighscore] = useState(0);
    const [newHighscore, setNewHighscore] = useState(false);
    const [score, setScore] = useState(0);
    const [snake, setSnake] = useState<{
        head: { x: number; y: number };
        trail: Array<any>;
    }>({
        head: { x: 12, y: 9 },
        trail: [],
    });
    const [apple, setApple] = useState<Apple>({ x: -1, y: -1 });
    const [velocity, setVelocity] = useState<Velocity>({ dx: 0, dy: 0 });
    const [previousVelocity, setPreviousVelocity] = useState<Velocity>({
        dx: 0,
        dy: 0,
    });

    const clearCanvas = (ctx: CanvasRenderingContext2D) =>
        ctx.clearRect(-1, -1, canvasWidth + 2, canvasHeight + 2);

    const generateApplePosition = (): Apple => {
        const x = Math.floor(Math.random() * (canvasWidth / canvasGridSize));
        const y = Math.floor(Math.random() * (canvasHeight / canvasGridSize));
        if (
            (snake.head.x === x && snake.head.y === y) ||
            snake.trail.some((snakePart) => snakePart.x === x && snakePart.y === y)
        ) {
            return generateApplePosition();
        }
        return { x, y };
    };

    const startGame = () => {
        setGameDelay(1000 / minGameSpeed);
        setIsLost(false);
        setScore(0);
        setSnake({
            head: { x: 12, y: 9 },
            trail: [],
        });
        setApple(generateApplePosition());
        setVelocity({ dx: 0, dy: -1 });
        setRunning(true);
        setNewHighscore(false);
        setCountDown(3);
    };

    const gameOver = () => {
        if (score > highscore) {
            setHighscore(score);
            localStorage.setItem('highscore', score.toString());
            setNewHighscore(true);
        }
        setIsLost(true);
        setRunning(false);
        setVelocity({ dx: 0, dy: 0 });
        setCountDown(4);
    };

    const fillRect = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number
    ) => {
        ctx.fillRect(x, y, w, h);
    };

    const strokeRect = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number
    ) => {
        ctx.strokeRect(x + 0.5, y + 0.5, w, h);
    };

    const drawSnake = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#FF00FF';
        ctx.strokeStyle = '#003779';

        fillRect(
            ctx,
            snake.head.x * canvasGridSize,
            snake.head.y * canvasGridSize,
            canvasGridSize,
            canvasGridSize
        );

        strokeRect(
            ctx,
            snake.head.x * canvasGridSize,
            snake.head.y * canvasGridSize,
            canvasGridSize,
            canvasGridSize
        );

        snake.trail.forEach((snakePart) => {
            fillRect(
                ctx,
                snakePart.x * canvasGridSize,
                snakePart.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            );

            strokeRect(
                ctx,
                snakePart.x * canvasGridSize,
                snakePart.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            );
        });
    };

    const drawApple = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#38C172';
        ctx.strokeStyle = '#187741';

        if (
            apple &&
            typeof apple.x !== 'undefined' &&
            typeof apple.y !== 'undefined'
        ) {
            fillRect(
                ctx,
                apple.x * canvasGridSize,
                apple.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            );

            strokeRect(
                ctx,
                apple.x * canvasGridSize,
                apple.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            );
        }
    };

    const updateSnake = () => {
        const nextHeadPosition = {
            x: snake.head.x + velocity.dx,
            y: snake.head.y + velocity.dy,
        };
        if (
            nextHeadPosition.x < 0 ||
            nextHeadPosition.y < 0 ||
            nextHeadPosition.x >= canvasWidth / canvasGridSize ||
            nextHeadPosition.y >= canvasHeight / canvasGridSize
        ) {
            gameOver();
        }

        if (nextHeadPosition.x === apple.x && nextHeadPosition.y === apple.y) {
            setScore((prevScore) => prevScore + 1);
            setApple(generateApplePosition());
        }

        const updatedSnakeTrail = [...snake.trail, { ...snake.head }];
        while (updatedSnakeTrail.length > score + 2) updatedSnakeTrail.shift();

        if (
            updatedSnakeTrail.some(
                (snakePart) =>
                    snakePart.x === nextHeadPosition.x &&
                    snakePart.y === nextHeadPosition.y
            )
        )
            gameOver();

        setPreviousVelocity({ ...velocity });
        setSnake({
            head: { ...nextHeadPosition },
            trail: [...updatedSnakeTrail],
        });
    };

    useEffect(() => {
        const canvas = canvasRef?.current;
        const ctx = canvas?.getContext('2d');

        if (ctx && !isLost) {
            clearCanvas(ctx);
            drawApple(ctx);
            drawSnake(ctx);
        }
    }, [snake]);

    useInterval(
        () => {
            if (!isLost) {
                updateSnake();
            }
        },
        running && countDown === 0 ? gameDelay : null
    );

    useInterval(
        () => {
            setCountDown((prevCountDown) => prevCountDown - 1);
        },
        countDown > 0 && countDown < 4 ? 800 : null
    );

    useEffect(() => {
        setHighscore(
            localStorage.getItem('highscore')
                ? parseInt(localStorage.getItem('highscore')!)
                : 0
        );
    }, []);

    useEffect(() => {
        if (score > minGameSpeed && score <= maxGameSpeed) {
            setGameDelay(1000 / score);
        }
    }, [score]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                [
                    'ArrowUp',
                    'ArrowDown',
                    'ArrowLeft',
                    'ArrowRight',
                    'w',
                    'a',
                    's',
                    'd',
                ].includes(e.key)
            ) {
                let velocity = { dx: 0, dy: 0 };

                switch (e.key) {
                    case 'ArrowRight':
                        velocity = { dx: 1, dy: 0 };
                        break;
                    case 'ArrowLeft':
                        velocity = { dx: -1, dy: 0 };
                        break;
                    case 'ArrowDown':
                        velocity = { dx: 0, dy: 1 };
                        break;
                    case 'ArrowUp':
                        velocity = { dx: 0, dy: -1 };
                        break;
                    case 'd':
                        velocity = { dx: 1, dy: 0 };
                        break;
                    case 'a':
                        velocity = { dx: -1, dy: 0 };
                        break;
                    case 's':
                        velocity = { dx: 0, dy: 1 };
                        break;
                    case 'w':
                        velocity = { dx: 0, dy: -1 };
                        break;
                    default:
                        console.error('Error with handleKeyDown');
                }
                if (
                    !(
                        previousVelocity.dx + velocity.dx === 0 &&
                        previousVelocity.dy + velocity.dy === 0
                    )
                ) {
                    setVelocity(velocity);
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [previousVelocity]);

    return (
        <div className="flex flex-col min-h-screen">
            <main>
                <canvas
                    ref={canvasRef}
                    width={canvasWidth + 1}
                    height={canvasHeight + 1}
                />
                <section>
                    <div className="score">
                        <p>
                            <FontAwesomeIcon icon={['fas', 'star']} />
                            Score: {score}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'trophy']} />
                            Highscore: {highscore > score ? highscore : score}
                        </p>
                    </div>
                    {!isLost && countDown > 0 ? (
                        <button onClick={startGame}>
                            {countDown === 4 ? 'Start Game' : countDown}
                        </button>
                    ) : (
                        <div className="controls">
                            <p>How to Play?</p>
                            <p>
                                <FontAwesomeIcon icon={['fas', 'arrow-up']} />
                                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                <FontAwesomeIcon icon={['fas', 'arrow-down']} />
                                <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                            </p>
                        </div>
                    )}
                </section>
                {isLost && (
                    <div className="game-overlay">
                        <p className="large">Game Over</p>
                        <p className="final-score">
                            {newHighscore ? ` New Highscore ` : `You scored: ${score}`}
                        </p>
                        {!running && isLost && (
                            <button onClick={startGame}>
                                {countDown === 4 ? 'Restart' : countDown}
                            </button>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}

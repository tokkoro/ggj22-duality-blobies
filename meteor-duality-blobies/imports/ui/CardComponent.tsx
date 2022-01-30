import React from 'react';
import {Card as CardData} from "/imports/data/card-data";
import {Button} from "react-bootstrap";


interface CardProps {
    card: CardData,
    playCard?: (c: CardData) => void,
    canPlay?: boolean,
    playLabel?: string,
    faceDown?: boolean,
}

export const CardComponent: React.FC<CardProps> = (
    {
        card,
        playCard,
        canPlay,
        playLabel,
        faceDown,
    }) => {
    return (
        <div className={"m-2 p-2 d-flex flex-column justify-content-between"} style={{
            minWidth: "128px",
            minHeight: "180px",
            maxWidth: "128px",
            maxHeight: "180px",
            borderRadius: "10px",
            border: "1px solid " + (card.side === "Dino" ? "#9B0000" : "#00009B"),
            backgroundColor: card.side === "Dino" ? "#FF5733" : "#6495ED",
            backgroundImage: card.side === "Both" ? "linear-gradient(#FF5733, #6495ED)" : undefined,
            boxShadow: faceDown ? "inset 0 0 0 1000px rgba(0,0,0,.5)" : "",
        }}>
            <p className={"text-center m-0"}><b>{faceDown ? "" : card.name}</b></p>
            {!faceDown ? <div className={"d-flex flex-column justify-content-around align-items-center"} style={{
                height: "70px",
                backgroundColor: "red",
                borderRadius: "4px",
                border: "1px solid " + (card.side === "Dino" ? "#9B0000" : "#00009B"),
            }}>
                <p className={"text-center m-0 power"}>{card.power}</p>
            </div> : null}
            {card.effects.length > 0 ? card.effects.map(
                effect => {
                    return <p key={effect.name} className={"m-0"}>{faceDown ? "" : (effect.text ?? effect.name)}</p>
                }) : <p/>
            }
            <div className={"d-flex justify-content-around"}>
                {(playCard && !faceDown) ?
                    <Button
                        disabled={!canPlay}
                        onClick={() => playCard(card)}
                        size={"sm"}
                        title={"moi"}
                    >
                        {playLabel ?? "PLAY"}
                    </Button> : null
                }
            </div>
        </div>
    );
};

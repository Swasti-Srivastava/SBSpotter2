import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Game(props) {
    const { loginData } = props;

    const [clickedLocation, setClickedLocation] = useState({ x: 10000, y: 10000 });
    const [destination, setDestination] = useState({ x: -1, y: -1 });
    const [imageURL, setImageURL] = useState("");
    const [timer, setTimer] = useState(0);
    const [tries, setTries] = useState(1);
    const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
    const [floorLevel, setFloorLevel] = useState("/school.png");
    const [floorChoice, setFloorChoice] = useState(1);
    const [currentFloor, setCurrentFloor] = useState(1);
    const [points, setPoints] = useState(0);
    const [firstImages, setFirstImages] = useState(["places/activities_office_1.jpg", "places/annex_gym_1.jpg", "places/annex_gym_bathroom_1.jpg", "places/annex-bottom-1.jpg", "places/annex-bottom-2.jpg", "places/aux_gym_1.jpg", "places/cafe_hall_1.jpg", "places/courtyard_1.jpg", "places/entrance_cafe_1.jpg",
                                          "places/freshman_cafe_1.jpg", "places/girls_locker_1.jpg", "places/hearts_hallway_1.jpg", "places/hearts_hallway_2.jpg", "places/main_gym_1.jpg", "places/nurse_annex_1.jpg", "places/outside_cafe.jpg", "places/stars_hallway_1.jpg", "places/weight_room.jpg",
                                          "places/faculty_room.jpg", "places/main_entrance_stairs.jpg", "places/library.jpg", "places/main_entrance.jpg", "places/sps.jpg", "places/auditorium_hall.jpg", "places/auditorium_entrance.jpg", "places/auditorium.jpg", "places/left_auditorium_hall.jpg", 
    ]);
    const [firstCoordinates, setFirstCoordinates] = useState([{ x: 543, y: 180 }, { x: 407, y: 136 }, {x: 467, y: 138}, {x: 625, y: 174}, {x: 668, y: 154}, {x: 397, y: 149}, {x: 481, y: 345}, {x: 490, y: 271}, {x: 432, y: 344},
                                                    {x: 569, y:168}, {x: 411, y:302}, {x: 552, y:334}, {x: 514, y:332}, {x: 403, y:270}, {x: 627, y: 180}, {x: 498, y:408}, {x: 502, y:126}, {x: 406, y:159},
                                                    {x: 504, y:411}, {x: 528, y:558}, {x: 560, y:567}, {x: 507, y:407}, {x: 500, y:577}, {x: 842, y: 570}, {x: 706, y:580}, {x: 683, y:512}, {x: 704, y:461}
    ]);
    const [secondImages, setSecondImages] = useState(["places/activities_office_1.jpg", "places/annex_gym_1.jpg", "places/annex_gym_bathroom_1.jpg", "places/annex-bottom-1.jpg", "places/annex-bottom-2.jpg", "places/aux_gym_1.jpg", "places/cafe_hall_1.jpg", "places/courtyard_1.jpg", "places/entrance_cafe_1.jpg",
                                          "places/freshman_cafe_1.jpg", "places/girls_locker_1.jpg", "places/hearts_hallway_1.jpg", "places/hearts_hallway_2.jpg", "places/main_gym_1.jpg", "places/nurse_annex_1.jpg", "places/outside_cafe.jpg", "places/stars_hallway_1.jpg", "places/weight_room.jpg",
                                          "places/faculty_room.jpg", "places/main_entrance_stairs.jpg", "places/library.jpg", "places/main_entrance.jpg", "places/sps.jpg", "places/auditorium_hall.jpg", "places/auditorium_entrance.jpg", "places/auditorium.jpg", "places/left_auditorium_hall.jpg", 
    ]);
    const [secondCoordinates, setSecondCoordinates] = useState([{ x: 543, y: 180 }, { x: 407, y: 136 }, {x: 467, y: 138}, {x: 625, y: 174}, {x: 668, y: 154}, {x: 397, y: 149}, {x: 481, y: 345}, {x: 490, y: 271}, {x: 432, y: 344},
                                                    {x: 569, y:168}, {x: 411, y:302}, {x: 552, y:334}, {x: 514, y:332}, {x: 403, y:270}, {x: 627, y: 180}, {x: 498, y:408}, {x: 502, y:126}, {x: 406, y:159},
                                                    {x: 504, y:411}, {x: 528, y:558}, {x: 560, y:567}, {x: 507, y:407}, {x: 565, y:524}, {x: 842, y: 570}, {x: 706, y:580}, {x: 683, y:512}, {x: 704, y:461}
    ]);
    const [thirdImages, setThirdImages] = useState(["places/activities_office_1.jpg", "places/annex_gym_1.jpg", "places/annex_gym_bathroom_1.jpg", "places/annex-bottom-1.jpg", "places/annex-bottom-2.jpg", "places/aux_gym_1.jpg", "places/cafe_hall_1.jpg", "places/courtyard_1.jpg", "places/entrance_cafe_1.jpg",
                                          "places/freshman_cafe_1.jpg", "places/girls_locker_1.jpg", "places/hearts_hallway_1.jpg", "places/hearts_hallway_2.jpg", "places/main_gym_1.jpg", "places/nurse_annex_1.jpg", "places/outside_cafe.jpg", "places/stars_hallway_1.jpg", "places/weight_room.jpg",
                                          "places/faculty_room.jpg", "places/main_entrance_stairs.jpg", "places/library.jpg", "places/main_entrance.jpg", "places/sps.jpg", "places/auditorium_hall.jpg", "places/auditorium_entrance.jpg", "places/auditorium.jpg", "places/left_auditorium_hall.jpg", 
    ]);
    const [thirdCoordinates, setThirdCoordinates] = useState([{ x: 543, y: 180 }, { x: 407, y: 136 }, {x: 467, y: 138}, {x: 625, y: 174}, {x: 668, y: 154}, {x: 397, y: 149}, {x: 481, y: 345}, {x: 490, y: 271}, {x: 432, y: 344},
                                                    {x: 569, y:168}, {x: 411, y:302}, {x: 552, y:334}, {x: 514, y:332}, {x: 403, y:270}, {x: 627, y: 180}, {x: 498, y:408}, {x: 502, y:126}, {x: 406, y:159},
                                                    {x: 504, y:411}, {x: 528, y:558}, {x: 560, y:567}, {x: 507, y:407}, {x: 565, y:524}, {x: 842, y: 570}, {x: 706, y:580}, {x: 683, y:512}, {x: 704, y:461}
    ]);


    const navigate = useNavigate();

    const postData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ points, id: loginData.id }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData.message);

            navigate('/');
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        return { total, seconds };
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 5);
        return deadline;
    };

    useEffect(() => {
        imageClick();
        clearTimer(getDeadTime());
    }, []);

    const startTimer = (e) => {
        let { total, seconds } = getTimeRemaining(e);

        if (total >= 0) {
            setTimer(
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setTimer("30");
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        return () => clearInterval(id);
    };

    const reset = (e) => {
        setTries(prevTries => {
            const newTries = prevTries + 1;
            // Call imageClick after setting the new value of tries
            return newTries;
        });
        setTimer("30");
        setClickedLocation({ x: 10000, y: 10000 });
        imageClick();

        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        return () => clearInterval(id);
    };

    const clicked = (event) => {
        const { offsetX, offsetY } = event.nativeEvent;
        if (offsetX < 177 || offsetX>894) {
            setClickedLocation({ x: 10000, y: 10000 });
        } else {
            setClickedLocation({ x: offsetX, y: offsetY });
        }
    };

    const imageClick = () => {
        let randFloor = Math.floor(Math.random() * 1);
        if (randFloor === 0) {
            let rand = Math.floor(Math.random() * firstImages.length);
            setImageURL("/" + firstImages[rand]);
            setDestination(firstCoordinates[rand]);
            setFirstImages(prevImages => {
                const updatedImages = [...prevImages]; // Create a copy of the previous state
                updatedImages.splice(rand, 1); // Modify the copy
                
                return updatedImages; // Set the state with the modified copy
            });

            setFirstCoordinates(prevCoords => {
                const updatedCoords = [...prevCoords]; // Create a copy of the previous state
                updatedCoords.splice(rand, 1); // Modify the copy
                
                return updatedCoords; // Set the state with the modified copy
            });

            setCurrentFloor(1);
            
        }

        if (randFloor === 1) {

            let rand = Math.floor(Math.random() * secondImages.length);
            setImageURL("/" + secondImages[rand]);
            setDestination(secondCoordinates[rand]);
            setSecondImages(prevImages => {
                const updatedImages = [...prevImages]; // Create a copy of the previous state
                updatedImages.splice(rand, 1); // Modify the copy
                
                return updatedImages; // Set the state with the modified copy
            });

            setSecondCoordinates(prevCoords => {
                const updatedCoords = [...prevCoords]; // Create a copy of the previous state
                updatedCoords.splice(rand, 1); // Modify the copy
                
                return updatedCoords; // Set the state with the modified copy
            });

            setCurrentFloor(2); 

        }

        if (randFloor === 2) {
            let rand = Math.floor(Math.random() * thirdImages.length);
            setImageURL("/" + thirdImages[rand]);
            setDestination(thirdCoordinates[rand]);
            setThirdImages(prevImages => {
                const updatedImages = [...prevImages]; // Create a copy of the previous state
                updatedImages.splice(rand, 1); // Modify the copy
                
                return updatedImages; // Set the state with the modified copy
            });

            setThirdCoordinates(prevCoords => {
                const updatedCoords = [...prevCoords]; // Create a copy of the previous state
                updatedCoords.splice(rand, 1); // Modify the copy
                
                return updatedCoords; // Set the state with the modified copy
            });

            setCurrentFloor(3);
        }
        
    };

    const levelChoice = (level) => {
        const images = ["school.png", "school2.png", "school3.png"];
        setFloorLevel("/" + images[level - 1]);
        setFloorChoice(level);

    }

    const distanceCalc = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    useEffect(() => {
        setMarkerPosition(clickedLocation);
    }, [clickedLocation]);

    useEffect(() => {
        if (timer === "00" && tries < 5) {

            if(floorChoice == currentFloor)
            {
                const newPoints = points + Math.floor(distanceCalc(clickedLocation.x, clickedLocation.y, destination.x, destination.y));
                setPoints(newPoints);
                
            }
            else{
                const newPoints = points + Math.floor(distanceCalc(10000, 10000, destination.x, destination.y))
                setPoints(newPoints);
            }
            
        }



    }, [timer, tries]);

    return (
        <div className="container">
            {tries < 5 &&loginData.email? (
                <div className="row justify-content-center align-items-center">
                    {parseInt(timer) > 0 && (
                        <div className="col-12">

                            <div className="d-flex flex-row d-flex justify-content-around align-items-center"> 
                                <img src={imageURL} style={{ marginTop: "10px", marginLeft: "120px", width: '150px', height: '200px', border: "2px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} />

                                <div className="d-flex flex-row d-flex justify-content-around align-items-center" style={{ marginBottom: 0, top: "0%", fontSize: "100px", width: '300px', height: '190px', backgroundColor: 'rgba(0, 255, 0, 0.3)', borderRadius: "10px", zIndex: 10, padding: "10px", borderColor: "green" }}>
                                        <h2>{timer}</h2>
                                </div>
                            
                            </div>
                            
                            <div onClick={clicked} style={{ position: 'relative', width: '100%', height: '650px', marginTop: "15px", cursor: "crosshair" }}>
                                <img src={floorLevel} style={{ width: "100%", height: "100%"}} alt="Background" />
                                {markerPosition.x !== 10000 && markerPosition.y !== 10000 && (
                                    <img src = "/icon.png" style={{ position: 'absolute', left: markerPosition.x-10, top: markerPosition.y - 20, width: '20px', height: '20px', zIndex: 10 }}></img>
                                )}
                                
                            </div>
                        </div>
                    )}
                    {timer === "00" && (
                        <div className="col-12">
                            <div className="d-flex flex-row d-flex justify-content-around align-items-center"> 
                                <img src={imageURL} style={{ marginTop: "10px", marginLeft: "120px", width: '150px', height: '200px', border: "2px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} />

                                <div className="d-flex flex-row d-flex justify-content-around align-items-center" style={{ marginBottom: 0, top: "0%", width: '300px', height: '190px', backgroundColor: 'rgba(255, 0, 0, 0.3)', borderRadius: "10px", zIndex: 10, padding: "10px", borderColor: "black" }}>
                                        <h2>{timer}</h2>
                                </div>
                            
                            </div>
                            <div style={{ position: 'relative', width: '100%', height: '650px', marginTop: "15px" }}>
                                <img src={floorLevel} style={{ width: "100%", height: "100%" }} alt="Background" />
                                {markerPosition.x !== 10000 && markerPosition.y !== 10000 && (
                                    <img src = "/icon.png" style={{ position: 'absolute', left: markerPosition.x-10, top: markerPosition.y - 20, width: '20px', height: '20px', zIndex: 10 }}></img>
                                )}
                                 <img src = "/flag.png" style={{ position: 'absolute', left: destination.x-5, top: destination.y - 20, width: '20px', height: '20px', zIndex: 10 }}></img>


                                
                                
                            </div>
                        </div>
                    )}
                    <div className="col-12 d-flex flex-row justify-content-between align-items-center mt-3" style = {{backgroundColor: "lightgrey", marginBottom: "25px", padding: '10px', borderRadius: "10px", borderStyle: "solid", borderColor: "black"}}>
                        <h2 style={{ whiteSpace: "nowrap" }}>Points: {points}</h2>
                        <button onClick={() => reset(getDeadTime())} className="btn btn-dark">Submit</button>
                        <div className = "d-flex justify-content-between" style={{width: "150px"}}>
                            <button onClick={() => levelChoice(1)} className="btn btn-dark mr-1">1</button>
                            <button onClick={() => levelChoice(2)} className="btn btn-dark mr-1">2</button>
                            <button onClick={() => levelChoice(3)} className="btn btn-dark">3</button>
                        </div>

                        {/*<p>x: {clickedLocation.x} y: {clickedLocation.y}</p>*/}

                    </div>
                </div>
            ) : (
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="d-flex flex-column align-items-center" style={{ maxWidth: '400px' }}>
                        <h1>Points: {points}</h1>
                        <form onSubmit={postData}>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Submit Points</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;

// Hotel.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRoom,
  createRoom,
  fetchHotel,
  deleteRoom,
} from "../../store/features/hotel/hotelReducer";
import styled from "styled-components";

const Hotel = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.hotel.hotel);
  const status = useSelector((state) => state.hotel.status);
  const error = useSelector((state) => state.hotel.error);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomStatus, setRoomStatus] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomPrice, setRoomPrice] = useState("");

  const handleUpdateRoomInfor = () => {
    if (selectedRoom) {
      dispatch(
        updateRoom({
          roomId: selectedRoom.roomId,
          room: {
            status: roomStatus,
            type: roomType,
            pricePerNight: roomPrice,
          },
        })
      );
    }
  };

  const handleDeleteRoom = () => {
    dispatch(
      deleteRoom({
        roomId: selectedRoom.roomId,
      })
    );
  };

  const handleCreateRoom = () => {
    const newRoom = {
      roomId: Math.floor(Math.random() * 1000),
      type: "Deluxe",
      pricePerNight: Math.floor(Math.random() * 1000),
      status: "available",
      description: "A deluxe room with a stunning view and premium amenities.",
    };
    dispatch(createRoom(newRoom));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHotel());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <HotelDetailsContainer>
      <div className="hotel-details">
        <h1>{data?.name}</h1>
        <p>{data?.address}</p>
        <p>Phone: {data?.phone}</p>
        <p>Email: {data?.email}</p>
        <p>
          Website: <a href={`http://${data?.website}`}>{data?.website}</a>
        </p>
        <p>Rating: {data?.rating}</p>

        <h2>Rooms:</h2>
        <ul>
          {data &&
            data?.rooms &&
            data.rooms.map((room) => (
              <li
                key={room.roomId}
                onClick={() => {
                  setSelectedRoom(room);
                  setRoomStatus(room.status);
                  setRoomType(room.type);
                  setRoomPrice(room.pricePerNight);
                }}
              >
                <strong>{room.type}</strong> - ${room.pricePerNight} per night
                <p>{room.description}</p>
                <p>Status: {room.status}</p>
                {selectedRoom && selectedRoom.roomId === room.roomId && (
                  <div className="room-details">
                    <h3>Update Room {selectedRoom.roomId}</h3>
                    <label>
                      Status:
                      <input
                        type="text"
                        value={roomStatus}
                        onChange={(e) => setRoomStatus(e.target.value)}
                      />
                    </label>
                    <label>
                      Type:
                      <input
                        type="text"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                      />
                    </label>
                    <label>
                      Price per Night:
                      <input
                        type="number"
                        value={roomPrice}
                        onChange={(e) => setRoomPrice(e.target.value)}
                      />
                    </label>
                    <button onClick={handleUpdateRoomInfor}>Update Room</button>
                    <button onClick={handleDeleteRoom}>Delete</button>
                  </div>
                )}
              </li>
            ))}
        </ul>
        <button className="create-room-btn" onClick={handleCreateRoom}>
          Create Room
        </button>
      </div>
    </HotelDetailsContainer>
  );
};

export default Hotel;

const HotelDetailsContainer = styled.div`
  padding: 20px;

  h1 {
    font-size: 2em;
  }

  p {
    margin: 10px 0;
  }

  h2 {
    margin-top: 30px;
    font-size: 1.5em;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
    cursor: pointer;
  }

  li strong {
    display: block;
    font-size: 1.2em;
  }

  li p {
    margin: 5px 0;
  }

  .room-details {
    margin-top: 20px;
  }

  .room-details label {
    display: block;
    margin: 10px 0;
  }

  .room-details input {
    display: block;
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .room-details button {
    margin-right: 10px;
  }

  .create-room-btn {
    margin-top: 20px;
  }
`;

import React from "react";
import { useNavigate } from "react-router-dom";

const PockeDetail = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button
                onClick={() => {
                    navigate("/dex");
                }}
            >
                뒤로가기
            </button>
        </div>
    );
};

export default PockeDetail;

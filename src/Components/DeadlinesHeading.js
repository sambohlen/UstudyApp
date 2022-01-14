import React from "react";
import styled from "styled-components";

function DeadlinesHeading(props) {

    const DeadlinesHeading = styled.h2`
        textAlign: left;
        weight: 700;
    `;
    return (
        <DeadlinesHeading>Project Deadlines</DeadlinesHeading>
    )
}

export default DeadlinesHeading;
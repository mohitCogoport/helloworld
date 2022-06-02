import styled, { keyframes } from '@cogoport/front/styled';

const bounce = keyframes`
	0%,
	50%,
	100% {
		transform: scale(1);
	}
	25% {
		transform: scale(0.6);
	}
	75% {
		transform: scale(1.4);
	}
`;

export const Container = styled.div`
	align-items: center;
	margin: 0;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
`;

export const PartnerTitle = styled.p`
	margin: 0px;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: #000000;
`;

export const AnimationContainer = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
`;

export const ColoredContainer = styled.div`
    width: 20px;
	height: 20px;
	border-radius: 100%;
	margin: 20px;
	background-image: linear-gradient(
		145deg,
		rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 0, 0, 0) 100%
	);
	animation: ${bounce} 1.5s 0.5s linear infinite;

    &.yellow {
	background-color: #f1bb1a;
    }

    &.green {
        background-color: #6cc077;
        animation-delay: 0.1s;
    }

    &.blue {
        background-color: #66acf7;
        animation-delay: 0.2s;
    }

    &.black {
        background-color: #000000;
        animation-delay: 0.3s;
    }
`;

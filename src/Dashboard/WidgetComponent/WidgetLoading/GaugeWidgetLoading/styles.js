import styled from '@cogoport/front/styled';

export const GaugeHolder = styled.div`
    width: 220px;
    margin: 0 auto;
    position: relative;
    text-align: center;
`;

export const CircleMask = styled.div`
    width: 220px;
    height: 106px;
    padding: 5px 10px 0;
    border-bottom: ${() => '1px solid #ecebeb'};
    position: relative;
    text-align: center;
    overflow: hidden;
`;

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: ${() => '10px solid #ecebeb'};
    position: relative;
`;

export const CircleInner = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    border-bottom: '10px solid #ecebeb';
    border-left: '10px solid #ecebeb';
    transition: .3s ease-in-out;
    transform: rotate(-45deg);

    &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ecebeb;
        border: '4px solid #ecebeb';
        left: 16px;
        top: 18px;
    }
`;

export const Percentage = styled.div`
    margin: 20px;
    font-weight: bold;
    color: #ecebeb;
    font-size: 15px;
    width: 100%;
`;

export const GaugeCopy = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    background: #ecebeb;
    top: 60%;
    left: 55%;
    transition: .3s ease-in-out;
    transform: translate(-50%, -50%) rotate(0deg);
    margin: 8px 0 0;

    &:after {
        content: "";
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #ecebeb;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    &:before {
        content: "";
        position: absolute;
        border: 7px solid transparent;
        border-right: ${() => '70px solid #ecebeb'};
        left: -75px;
        top: 8px;
        width: 0;
        height: 0;
    }
`;

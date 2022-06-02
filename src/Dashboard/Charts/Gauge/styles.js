import styled from '@cogoport/front/styled';

export const themes = {
	blues: {
		active        : '#2270b5',
		inactive      : '#c6daef',
		pointer       : '#0a306b',
		pointer_inner : '#c6daef',
	},
	purples: {
		active        : '#6a51a3',
		inactive      : '#dadaea',
		pointer       : '#3f007d',
		pointer_inner : '#dadaea',
	},
	purple_orange: {
		active        : '#762a83',
		inactive      : '#f7f7f7',
		pointer       : '#df8214',
		pointer_inner : '#fee0b6',
	},
	yellow_orange_red: {
		active        : '#e31a1c',
		inactive      : '#ffed9f',
		pointer       : '#fd8d3c',
		pointer_inner : '#fed875',
	},
	pastel1: {
		active        : '#ccebc5',
		inactive      : '#f2f2f2',
		pointer       : '#fbb4ae',
		pointer_inner : '#fcd9ec',
	},
	reds: {
		active        : '#ef3b2c',
		inactive      : '#fee0d2',
		pointer       : '#fb6a49',
		pointer_inner : '#fc9272',
	},
	purple_blue: {
		active        : '#3f007d',
		inactive      : '#6a51a3',
		pointer       : '#807dba',
		pointer_inner : '#9e9ac8',
	},
	set3: {
		active        : '#9e9ac8',
		inactive      : '#ccebc5',
		pointer       : '#bc80bd',
		pointer_inner : '#d9d9d9',
	},
	red_grey: {
		active        : '#67001f',
		inactive      : '#d6604d',
		pointer       : '#fddbc7',
		pointer_inner : '#4d4d4d',
	},
	green_blue: {
		active        : '#a8ddb5',
		inactive      : '#7bccc4',
		pointer       : '#4eb3d3',
		pointer_inner : '#2b8cbe',
	},
};

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
    border-bottom: ${(props) => `1px solid ${themes?.[props?.themeType]?.inactive}`};
    position: relative;
    text-align: center;
    overflow: hidden;
`;

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: ${(props) => `10px solid ${themes?.[props?.themeType]?.inactive}`};
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
    border-bottom: ${(props) => `10px solid ${themes?.[props?.themeType]?.active}`};
    border-left: ${(props) => `10px solid ${themes?.[props?.themeType]?.active}`};
    transition: .3s ease-in-out;
    transform: rotate(-45deg);

    &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
        border: ${(props) => `4px solid ${themes?.[props?.themeType]?.active}`};
        left: 16px;
        top: 18px;
    }
`;

export const Percentage = styled.div`
    margin: 20px;
    font-weight: bold;
    color: ${(props) => themes?.[props?.themeType]?.active};
    font-size: 15px;
    width: 100%;
`;

export const GaugeCopy = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    background: ${(props) => themes?.[props?.themeType]?.pointer};
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
        background: ${(props) => themes?.[props?.themeType]?.pointer_inner};
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    &:before {
        content: "";
        position: absolute;
        border: 7px solid transparent;
        border-right: ${(props) => `70px solid ${themes?.[props?.themeType]?.pointer}`};
        left: -75px;
        top: 8px;
        width: 0;
        height: 0;
    }
`;

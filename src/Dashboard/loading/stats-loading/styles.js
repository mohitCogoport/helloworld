import styled from '@cogoport/front/styled';

export const StatsLoadingContainer = styled.div`
  padding-top: 30px;
  .dots-bars-5 {
    width: 40px;
    height: 30px;
    --c1: linear-gradient(#66acf7, #66acf7);
    --c2: linear-gradient(#f1bb1a, #f1bb1a);
    --c3: linear-gradient(#6cc077, #6cc077);
    background:
      var(--c1) 0    100%/8px 30px,
      var(--c2) 50%  100%/8px 20px,
      var(--c3) 100% 100%/8px 10px;
    background-repeat: no-repeat;
    position: relative;
    clip-path: inset(-100% 0);
  }
  .dots-bars-5:before{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background:currentColor;
    left:-16px;
    top:0;
    animation: 
      db5-1 2s   linear infinite,
      db5-2 0.5s cubic-bezier(0,200,.8,200) infinite;
  }
  
  @keyframes db5-1 {
    0%   {left:-16px;transform:translateY(-8px)}
    100% {left:calc(100% + 8px);transform:translateY(22px)}
  }
  
  @keyframes db5-2 {
    100% {top:-0.1px}
  }
`;

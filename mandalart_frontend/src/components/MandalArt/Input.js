import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const CenterCell = styled.div`
min-width: 70px;
min-height: 70px;
font-family: 'Rajdhani';
font-size: 2.4rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 2px;
box-sizing: border-box;
border: 1px solid ${oc.gray[4]};
background: ${oc.red[6]};
color: ${oc.gray[3]};
margin: 3px;

${media.tablet`
    min-width: 40px;
    min-height: 40px;
    font-size: 1.4rem;
`}
`;

const BorderedButton = styled(Link)`
width: 10rem;
height: 4rem;
font-weight: 700;
font-size: 1.8rem;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid ${oc.gray[2]};
color: ${oc.gray[1]};
padding: 0.5rem;
cursor: pointer;
border-radius: 2px;
text-decoration: none;
transition: all .3s;

&:hover {
    background: ${oc.orange[3]};
    transform: translateY(-2px);
    ${shadow(1)}
}

&:active {
    background: ${oc.orange[4]};
}

${media.tablet`
    width: 8rem;
    height: 3rem;
    font-size: 1.6rem;
`}
`;

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-sizing: border-box;
    ::placeholder {
        color: ${oc.gray[4]};
    }

    &:focus {
        border: 1px solid ${oc.orange[9]}
    }
`;

const Input = () => {
    return (
        <div>
            Input
        </div>
    );
}

export default Input;
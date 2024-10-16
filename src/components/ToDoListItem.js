import React from 'react';
import styled from 'styled-components';

const LiContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;
const LiContent = styled.div`
  /* li 대신 div 사용 */
  margin: 17px 0;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  display: none; /* 체크박스 숨기기 */
`;

const CheckBox = styled.div`
  width: 26px;
  height: 26px;
  border: 1px solid #6c63ff;
  background-color: ${({ checked }) => (checked ? '#6c63ff' : 'transparent')}; /* 체크된 경우 색상 */
  margin-right: 10px;
  position: relative;
`;

const CheckMark = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.9978 14.6488L3.59745 16.0767L5.02539 17.4771L6.42574 16.0491L4.9978 14.6488ZM6.39816 13.2209L1.40037 8.31962L-1.40034 11.1755L3.59745 16.0767L6.39816 13.2209ZM13.1291 3.50089L3.56986 13.2484L6.42574 16.0491L15.985 6.30159L13.1291 3.50089Z"
      fill="#F7F7F7"
    />
  </svg>
);

const OptionBox = styled.div``;

const OptionBoxSVG = styled.svg`
  margin-left: 5px;
`;

export default function ToDoListItem({ id, text, isChecked }) {
  return (
    <LiContainer>
      <LiContent>
        <Input type="checkbox" checked={isChecked} id={id} readOnly />
        <CheckBox checked={isChecked}>
          {isChecked && <CheckMark />} {/* 체크되었을 때 SVG 표시 */}
        </CheckBox>
        <span>{text}</span>
      </LiContent>
      <OptionBox>
        <OptionBoxSVG width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736M8.67272 5.99106L11.0654 3.59837L11.0669 3.59695C11.3962 3.26759 11.5612 3.10261 11.7514 3.04082C11.9189 2.98639 12.0993 2.98639 12.2669 3.04082C12.4569 3.10257 12.6217 3.26735 12.9506 3.59625L14.4018 5.04738C14.7321 5.37769 14.8973 5.54292 14.9592 5.73337C15.0136 5.90088 15.0136 6.08133 14.9592 6.24885C14.8974 6.43916 14.7324 6.60414 14.4025 6.93398L14.4018 6.93468L12.0091 9.32736M8.67272 5.99106L12.0091 9.32736"
            stroke="#CDCDCD"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </OptionBoxSVG>
        <OptionBoxSVG width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
            stroke="#CDCDCD"
          />
          <path d="M14.625 3.75H3.375" stroke="#CDCDCD" strokeLinecap="round" />
          <path
            d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
            stroke="#CDCDCD"
          />
          <path d="M10.5 9V12.75" stroke="#CDCDCD" strokeLinecap="round" />
          <path d="M7.5 9V12.75" stroke="#CDCDCD" strokeLinecap="round" />
        </OptionBoxSVG>
      </OptionBox>
    </LiContainer>
  );
}

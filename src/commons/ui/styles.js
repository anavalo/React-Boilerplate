import styled from 'styled-components';

export const MaxContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.width || '1440px'};
  z-index: 1;
  position: relative;
`;

export const TableHeader = styled.h1`
  width: 100%;
  padding-bottom: 30px;
  color: ${props => props.theme.data.light.colors.NightSky};
`;

export const ListTh = styled.th`
  ${props => props.primary && props.theme.data.light.typography['body-primary-l']};
  ${props => props.secondary && props.theme.data.light.typography['table-secondary-sm']};
  ${props => props.smallBold && props.theme.data.light.typography['table-heading-b']};
  color: ${props => props.theme.data.light.colors.NightSky};
  padding: 15px 0;
  text-transform: ${props => props.textTransform || ''};
  text-align: ${props => props.align || 'center'};
`;

export const ListTd = styled.div`
  ${props => props.primary && props.theme.data.light.typography['body-primary-l']};
  ${props => props.secondary && props.theme.data.light.typography['table-secondary-sm']};
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  padding: 9px 14px 10px 0;
  color: ${props => props.color || props.theme.data.light.colors.NightSky};
  
  
  > span:nth-child(1){
      line-height: ${props => props.crewlist ? '18px' : 'inherit'};
      margin-bottom: ${props => props.crewlist ? '4px' : '0'};
  }
  
  > span:nth-child(2){
     ${props => props.theme.data.light.typography['table-secondary-sm']}
     color: ${props => props.theme.data.light.colors.Smoke};
  }
  
`;

export const ActionPayRollButton = styled.button`
  background: ${props => props.color || props.theme.data.light.colors.NightSky};
  border-radius: 0;
  border: 0;
  color: ${props => props.theme.data.light.colors.White};
  margin: 0;
  padding: 8px 27px;
  position: absolute;
  left: 0;
  cursor: pointer;
  top: 10px;
  &:hover{
     opacity: 0.8;
  }
`;

export const ActionAddLineButtonCss = styled.button`
  background: ${props => props.color || props.theme.data.light.colors.DirtySnow};
  border-radius: 0;
  border: 0;
  color: ${props => props.theme.data.light.colors.NightSky};
  padding: 8px 18px 8px 36px;
  position: relative;
  left: 0;
  display: block;
  cursor: pointer;
  margin-left: 30px;
  > span {
    position: absolute;
    top: 9px;
    left: 12px;
  }
`;

export const ActionNext = styled.button`
  background: ${props => props.color || props.theme.data.light.colors.NightSky};
  color: ${props => props.theme.data.light.colors.White};
  border-radius: 0;
  border: 0;
  color: #ffffff;
  margin: 0;
  padding: 11px 72px 11px 42px;
  position: relative;
  left: 0;
  cursor: pointer;
   &:hover{
     opacity: 0.8;
  }
`;

export const ActionNextSubmit = styled.input`
  background: ${props => props.color || props.theme.data.light.colors.NightSky};
  color: ${props => props.theme.data.light.colors.White};
  border-radius: 0;
  border: 0;
  color: #ffffff;
  margin: 0;
  padding: 12px 58px 12px 42px;
  position: relative;
  left: 0;
  cursor: pointer;
  text-transform: uppercase;
  &:hover{
     opacity: 0.8;
  }
`;

export const ActionNextSubmitContainer = styled.span`
  background: ${props => props.color || props.theme.data.light.colors.NightSky};
  color: ${props => props.theme.data.light.colors.White};
  border-radius: 0;
  border: 0;
  color: #ffffff;
  margin: 0;
  position: relative;
  left: 0;
  cursor: pointer;
  float: right;
   &:hover{
     opacity: 0.8;
  }
`;


export const NextButton = styled.div`
  display: block;
  background: ${props => props.color || props.theme.data.light.colors.NightSky};
  
`;

export const NextButtonSubmit = styled.div`
    display: inline-block;
    background: #090E36;
    position: absolute;
    top: 14px;
    left: 0;
 
`;

export const SmallNextArrowSvg = styled.span`
    position: absolute;
    left: 14px;
    top: 11px;
`;

export const SmallNextSubmitArrowSvg = styled.span`
    position: absolute;
    left: 14px;
    top: -5px;
    transform: rotate(180deg)
`;

export const ActionConfirmButton = styled.span`
  background: ${props => props.color || props.theme.data.light.colors.White};
  border: 1px solid ${props => props.color || props.theme.data.light.colors.NightSky};
  border-radius: 0;
  color: ${props => props.color || props.theme.data.light.colors.NightSky};
  margin: 0;
  padding: 10px 38px;
  position: relative;
  left: 0;
  top: 0;
  cursor: pointer;
  text-transform: uppercase;
   &:hover{
     opacity: 0.8;
  }
`;

export const ActionCancelButton = styled.span`
  background: ${props => props.color || props.theme.data.light.colors.NightSky};
  border: 1px solid ${props => props.color || props.theme.data.light.colors.NightSky};
  border-radius: 0;
  color: ${props => props.color || props.theme.data.light.colors.White};
  margin: 0;
  padding: 10px 38px;
  position: relative;
  left: 0;
  top: 0;
  cursor: pointer;
  text-transform: uppercase;
   &:hover{
     opacity: 0.8;
  }
`;


export const ActionDelete = styled.button`
  background: ${props => props.color || props.theme.data.light.colors.DirtySnow};
  border-radius: 0;
  border: 0;
  color: #ffffff;
  margin: 0;
  padding: 20px 30px;
  position: relative;
  left: 0;
  top: 0;
  cursor: pointer;
  background: #e5e9f3;
   &:hover{
     opacity: 0.8;
  }
`;

export const DeleteButton = styled.div`
  display: block;
  background: ${props => props.color || props.theme.data.light.colors.NightSky};
`;

export const SmallDeleteArrowSvg = styled.span`
  position: absolute;
  left: 23px;
  top: 14px;
`;

import styled from 'styled-components/native';

export const WelcomeText = styled.Text`
  width: 80%;
  font-size: 24;
  color: ${({theme: {textColor}}) => textColor};
`;

export const PermissionButton = styled.TouchableOpacity`
  margin-top: 16;
  padding-top: 16;
  padding-right: 16;
  padding-bottom: 16;
  padding-left: 16;
`;

export const PermissionButtonText = styled.Text`
  font-size: 18;
  color: ${({theme: {textColor}}) => textColor};
`;

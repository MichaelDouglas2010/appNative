import { TextInput, StyleSheet, Image } from 'react-native';

export default function StyledImg() {
  return (
    <div>
      <div style={styles.input}>
        <Image source={require('../../assets/boxImg.png')} style={{ width: 50, height: 50 }} />
        <TextInput placeholder="Text for image 01" />
      </div>
      <div style={styles.input}>
        <Image source={require('../../assets/boxImg.png')} style={{ width: 50, height: 50 }} />
        <TextInput placeholder="Text for image 02" />
      </div>
      <div style={styles.input}>
        <Image source={require('../../assets/boxImg.png')} style={{ width: 50, height: 50 }} />
        <TextInput placeholder="Text for image 03" />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
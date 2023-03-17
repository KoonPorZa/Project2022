import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Step_1, Step_2} from './SignUpScreen';
import {
  TextInput,
  Button,
  Avatar,
  Appbar,
  IconButton,
} from 'react-native-paper';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export const role = [
  {
    id: '1',
    label: 'บุคคลทั่วไป',
  },
  {
    id: '2',
    label: 'นักศึกษา (มทร.ธัญบุรี)',
  },
  {
    id: '3',
    label: 'ศิษย์เก่า (มทร.ธัญบุรี)',
  },
];

const SignUp = () => {
  // Hook
  const myForm = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      job: '',
      birthday: new Date,
      province: null,
      amphure: null,
      tambon: null,
      zipCode: null,
      agency: '',
      status: null,
      about: '',
      image_rul: '',
      id_verify: '',
      address: '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    getValues
  } = myForm;

  // Step 1 > 2
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = ['Step 1', 'Finish'];
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  
  // Navigate
  const navigation = useNavigation();
  const onHadAccountPress = () => {
    navigation.navigate('Main');
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      {activeStep === 0 && (
        <Step_1
          handleNext={handleNext}
          activeStep={activeStep}
          myForm={myForm}
        />
      )}
      {activeStep === 1 && (
        <Step_2
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
          myForm={myForm}
        />
      )}
    </View>
  );
};

export default SignUp;

// export const onSubmit = async data => {
//   console.log(data);
//   const addUser = async (params) => {
//     const url = `http://192.168.152.249:8000/user/register_mobile`
//     try {
//       await axios.post(url, params)
//       console.log("Try addUser Complete")
//       return true
//     } catch (error) {
//       console.log("Catch addUser :"+error)
//     }
//   }
//   if(data) {
//     try {
//       const result = await addUser(data)
//       if(result == true) {
//         console.log('Register Complete !!!')
//       } else {
//         console.log('Register Error !!!')
//         setActiveStep(0)
//       }
//     } catch (error) {
//       console.log('Catch : '+error)
//     } 
//   } else {
//     console.log('test log else')
//   }
// };

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '85%',
    marginBottom: 10,
  },
  btn: {
    width: 150,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
});

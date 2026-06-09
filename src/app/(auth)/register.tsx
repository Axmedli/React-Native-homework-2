import { Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useState } from 'react'
import { useMMKVBoolean } from 'react-native-mmkv'
import StyledText from '../../components/StyledText'

const Register = () => {
  const[step, setStep] = useState(1)
  const [darkmode, setDarkMode] = useMMKVBoolean('darkmode');
  
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    fatherName: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    phone: '',
    fatherName: '',
    email: '',
    password: '',
  })

  const validate = () => {
    const newErrors = {
      name: '',
      lastName: '',
      phone: '',
      fatherName: '',
      email: '',
      password: '',
    }

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'


      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'

      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'

    }

    if (step === 2) {
      if (!formData.fatherName.trim()) newErrors.fatherName = 'Father name is required'
    }

    if (step === 3) {
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!formData.email.includes('@')) newErrors.email = 'Invalid email address'

      if (formData.password.length < 8) {
        newErrors.password =
          'Password must be at least 8 characters long'
      }
    } 

    setErrors(newErrors)

    return Object.values(newErrors).every(
      error => error === ''
    )
  }

  const handleChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
    setErrors(prevState => ({ ...prevState, [name]: '' }))
  }

  const handleSubmit = () => {
    if(!validate()) return 

    if (step === 1) {
      setStep(2)
      return
    }
    if (step === 2) {
      setStep(3)
      return
    } 

    console.log(formData)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 , justifyContent: 'center' , backgroundColor: darkmode ? '#000000' : '#ffffff'}}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <View className={darkmode ? 'bg-black' : 'bg-white'} justify-center>
          <View className="border border-zinc-300 mx-5 p-5 gap-5">

            <View className='flex-row items-center justify-between'>
              <TouchableOpacity onPress={() => setStep(1)} className={`${step === 1 ? 'bg-green-700' : 'border-zinc-400'} size-14 border  rounded-full items-center justify-center`} >
                <StyledText className={`text-xl ${step === 1 ? 'text-green-700 text-white' : 'text-zinc-400'}`}>1</StyledText>
              </TouchableOpacity>

              <View className='border-b border-zinc-300 w-2/8'></View>

              <TouchableOpacity onPress={() => {formData.name && formData.lastName && formData.phone && setStep(2)}} className={`${step === 2 ? 'bg-green-700' : 'border-zinc-400'} size-14 border  rounded-full items-center justify-center`} >
                <StyledText className={`text-xl ${step === 2 ? 'text-green-700 text-white' : 'text-zinc-400'}`}>2</StyledText>
              </TouchableOpacity>

              <View className='border-b border-zinc-300 w-2/8'></View>

              <TouchableOpacity onPress={() => { formData.name && formData.lastName && formData.phone && formData.fatherName && setStep(3)}} className={`${step === 3 ? 'bg-green-700' : 'border-zinc-400'} size-14 border  rounded-full items-center justify-center`} >
                <StyledText className={`text-xl ${step === 3 ? 'text-green-700 text-white' : 'text-zinc-400'}`}>3</StyledText>
              </TouchableOpacity>
            </View>

            {
              step === 1 && (
                <>
                  <View className="gap-2">
                      <StyledText>Name</StyledText>
                      <TextInput value={formData.name} onChangeText={(text)=> handleChange('name', text)} placeholder="Enter your name" placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"} className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`} />
                      {errors.name ? <Text className="text-red-500">{errors.name}</Text> : null}
                  </View>

                  <View className="gap-2">
                      <StyledText>Last Name</StyledText>
                      <TextInput value={formData.lastName} onChangeText={(text)=> handleChange('lastName', text)} placeholder="Enter your last name" placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"} className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`} />
                      {errors.lastName ? <Text className="text-red-500">{errors.lastName}</Text> : null}
                  </View>

                  <View className="gap-2">
                      <StyledText>Phone</StyledText>
                      <TextInput value={formData.phone} onChangeText={(text)=> handleChange('phone', text)} placeholder="Enter your phone number" placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"} className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`} />
                      {errors.phone ? <Text className="text-red-500">{errors.phone}</Text> : null}
                  </View>
                </>
              )
            }

            {
              step === 2 && (
                <View className="gap-2">
                  <StyledText>Father Name</StyledText>
                  <TextInput value={formData.fatherName} onChangeText={(text)=> handleChange('fatherName', text)} placeholder="Enter your father name" placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"} className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`} />
                  {errors.fatherName ? <Text className="text-red-500">{errors.fatherName}</Text> : null}
                </View>
              )
            }

            {
              step === 3 &&(
                <>
                  <View className="gap-2">
                    <StyledText>Email</StyledText>
                    <TextInput
                      value={formData.email}
                      onChangeText={(text)=> handleChange('email', text)}
                      placeholder="Enter your email"
                      placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"}
                      className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    {errors.email ? <Text className="text-red-500">{errors.email}</Text> : null}
                  </View>

                  <View className="gap-2">
                    <StyledText>Password</StyledText>
                    <TextInput
                      value={formData.password}
                      onChangeText={(text)=> handleChange('password', text)}
                      placeholder="Enter your password"
                      placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"}
                      className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`}
                      secureTextEntry
                    />
                    {errors.password ? <Text className="text-red-500">{errors.password}</Text> : null}
                  </View>
                </>
              )
            }
        
            <TouchableOpacity onPress={handleSubmit} className="bg-green-700 py-6">
              <Text className="text-center text-white text-xl">{step !== 3 ? 'Next' : 'Submit'}</Text>
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  )
}

export default Register
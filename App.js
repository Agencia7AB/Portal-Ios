import 'react-native-gesture-handler';
import React from 'react';
import { Image} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';


import Login from "./src/Pages/Login/index"
import Cadastro from "./src/Pages/Cadastro/index"
import Home from "./src/Pages/Home"
import Principal from './src/Pages/Principal';
import Hotmart from './src/Pages/Hotmart';
import Trocadesenha2 from "./src/Trocadesenha2/index"
import HomeModulo1 from './src/Modulo1/HomeModulo1/HomeModulo1'
import Escolha from './src/Escolha';
import HomeM from './src/ModulosConcluidos/HomeM'
import HomeM1 from './src/ModulosConcluidos/HomeM1'
import AnalisisFacialC from './src/ModulosConcluidos/Modulo1/AnalisisFacialC';
import CefalometriaC from './src/ModulosConcluidos/Modulo1/CefalometriaC';
import CefalometriaPDFC from './src/ModulosConcluidos/Modulo1/CefalometriaPDFC';
import Modulo2C from './src/ModulosConcluidos/Modulo2/Modulo2C';
import Modulo3C from './src/ModulosConcluidos/Modulo3/Modulo3C'
import Modulo4C from './src/ModulosConcluidos/Modulo4/Modulo4C';
import Modulo5C from './src/ModulosConcluidos/Modulo5/Modulo5C';
import Modulo6C from './src/ModulosConcluidos/Modulo6/Modulo6C';
import Modulo7C from './src/ModulosConcluidos/Modulo7/Modulo7C';
import Modulo8C from './src/ModulosConcluidos/Modulo8/Modulo8C';
import Modulo9C from './src/ModulosConcluidos/Modulo9/Modulo9C';
import Modulo10C from './src/ModulosConcluidos/Modulo10/Modulo10';
import AnalisisFacial from './src/Modulo1/AnalisisFacial/AnalisisFacial'
import Trocadesenha from './src/Trocadesenha/index';
import Cefalometria from './src/Modulo1/Cefalometria/Cefalomeria'
import TareadeCefalometria from './src/Modulo1/TareasdeCefalometria/TareadeCefalometria'
import Modulo2 from './src/Modulo2/Modulo2'
import Modulo3 from './src/Modulo3/Modulo3'
import Modulo4 from './src/Modulo4/Modulo4'
import Modulo5 from './src/Modulo5/Modulo5'
import Modulo6 from './src/Modulo6/Modulo6'
import Modulo7 from './src/Modulo7/Modulo7'
import Modulo8 from './src/Modulo8/Modulo8'
import Modulo9 from './src/Modulo9/Modulo9'
import Modulo10 from './src/Modulo10/Modulo10'



const Stack = createStackNavigator()

          
export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '',
              shadowColor: 'transparent',
            },
          }}
        />
        
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Crear Cuenta',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTintColor: "#FFF",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },
          }}

        />

        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Portal OSF',
            headerTintColor: "#ffffff",
            headerTitleAlign: "center",
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}
        />

        <Stack.Screen
          name="Hotmart"
          component={Hotmart}
          options={{
            title: 'Compras in-App',
            headerTintColor: "#ffffff",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}
        />
        
        <Stack.Screen
        name="Escolha"
        component={Escolha}
        options={{
          title: 'Portal OSF',
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },

        }}
      />

      <Stack.Screen
        name="HomeM"
        component={HomeM}
        options={{
          headerTitle: (props) => <LogoTitle2 {...props} />,
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />

      <Stack.Screen
        name="HomeM1"
        component={HomeM1}
        options={{
          title: 'Módulo 1',
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />

      <Stack.Screen
        name="AnalisisFacialC"
        component={AnalisisFacialC}
        options={{
          title: 'Análisis Facial',
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />

      <Stack.Screen
        name="CefalometriaC"
        component={CefalometriaC}
        options={{
          title: 'Cefalometría',
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />
      
      <Stack.Screen
      name="CefalometriaPDFC"
      component={CefalometriaPDFC}
      options={{
        title: 'Cefalometría (pdf webceph)',
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: '#054A59',
          shadowColor: 'transparent',
        },
      }}
    />
    
      <Stack.Screen
        name="Modulo2C"
        component={Modulo2C}
        options={{
          title: 'Módulo 2',
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />

      <Stack.Screen
        name="Modulo3C"
        component={Modulo3C}
        options={{
          title: 'Módulo 3',
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />
      
      <Stack.Screen
      name="Modulo4C"
      component={Modulo4C}
      options={{
        title: 'Módulo 4',
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: '#054A59',
          shadowColor: 'transparent',
        },
      }}
    />
    
        <Stack.Screen
        name="Modulo5C"
        component={Modulo5C}
        options={{
          title: 'Módulo 5',
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />
      
      <Stack.Screen
      name="Modulo6C"
      component={Modulo6C}
      options={{
        title: 'Módulo 6',
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: '#054A59',
          shadowColor: 'transparent',
        },
      }}
    />
    
        <Stack.Screen
        name="Modulo7C"
        component={Modulo7C}
        options={{
          title: 'Módulo 7',
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />
  
        <Stack.Screen
        name="Modulo8C"
        component={Modulo8C}
        options={{
          title: 'Módulo 8',
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: '#054A59',
            shadowColor: 'transparent',
          },
        }}
      />
      
      <Stack.Screen
      name="Modulo9C"
      component={Modulo9C}
      options={{
        title: 'Módulo 9',
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: '#054A59',
          shadowColor: 'transparent',
        },
      }}
    />
    
    <Stack.Screen
    name="Modulo10C"
    component={Modulo10C}
    options={{
      title: 'Módulo 10',
      headerTintColor: "#ffffff",
      headerStyle: {
        backgroundColor: '#054A59',
        shadowColor: 'transparent',
      },
    }}
  />
      
        <Stack.Screen
          name="Trocadesenha"
          component={Trocadesenha}
          options={{
            title: 'Primer acceso',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Trocadesenha2"
          component={Trocadesenha2}
          options={{
            title: 'Cambio de contraseña',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="HomeModulo1"
          component={HomeModulo1}
          options={{
            title: 'Home',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />
        <Stack.Screen
          name="AnalisisFacial"
          component={AnalisisFacial}
          options={{
            title: 'Análisis Facial',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Cefalometria"
          component={Cefalometria}
          options={{
            title: 'Cefalometría',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="TareadeCefalometria"
          component={TareadeCefalometria}
          options={{
            title: 'Cefalometría (pdf webceph)',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo2"
          component={Modulo2}
          options={{
            title: 'Módulo 2',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo3"
          component={Modulo3}
          options={{
            title: 'Módulo 3',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo4"
          component={Modulo4}
          options={{
            title: 'Módulo 4',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo5"
          component={Modulo5}
          options={{
            title: 'Módulo 5',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo6"
          component={Modulo6}
          options={{
            title: 'Módulo 6',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo7"
          component={Modulo7}
          options={{
            title: 'Módulo 7',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo8"
          component={Modulo8}
          options={{
            title: 'Módulo 8',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo9"
          component={Modulo9}
          options={{
            title: 'Módulo 9',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}

        />

        <Stack.Screen
          name="Modulo10"
          component={Modulo10}
          options={{
            title: 'Módulo 10',
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: '#054A59',
              shadowColor: 'transparent',
            },

          }}
        />


      </Stack.Navigator>

    </NavigationContainer>


  );

}

function LogoTitle() {
  return (
      <Image
        style={{width: 130, height: 53.66 }}
        source={{uri: "https://firebasestorage.googleapis.com/v0/b/teste-5e945.appspot.com/o/Logos%2FLOGO%20BRANCO%20DOURADO.png?alt=media&token=c5cbf878-7c6f-4dc2-8483-31943716dcf0"}}
      />
  );
}

function LogoTitle2() {
  return (
    <Animatable.View
      animation="fadeInUpBig"
    >
      <Image
        style={{width: 130, height: 53.66 }}
        source={{uri: "https://firebasestorage.googleapis.com/v0/b/teste-5e945.appspot.com/o/Logos%2FLOGO%20BRANCO%20DOURADO.png?alt=media&token=c5cbf878-7c6f-4dc2-8483-31943716dcf0"}}
      />
    </Animatable.View>
  );
}
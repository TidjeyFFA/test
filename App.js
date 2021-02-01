import React, {useState, useEffect} from 'react';
import { 
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
  } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import { ListItem, Left, Right, Radio, Content } from 'native-base';

export default function App() {
  const [cart, setCart] = useState([
    {
      name: 'Режиссер-Актер',
      dopText: 'Ребята разбиваются на пары и каждый говорит о себе определенные...',
      reyting: '3,5',
      price: '5-100',
      perPrice: '15-30',
    },
    {
      name: 'Airpods',
      dopText: 'Apple',
      reyting: '3,5',
      price: '5-100',
      perPrice: '5-30',
    },
    {
      name: 'круг в круге',
      dopText: 'ребята образуют два круга, стоя друг на против друга...',
      reyting: '3,5',
      price: '6-20',
      perPrice: '10-30',
    }, 
  ]);
  const [shippingMethod, setShippingMethod] = useState('Normal');

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);


  return (
    <View style={styles.container1}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ alignItems: 'center',/*backgroundColor: '#FFF8DC',*/}}>
        <Text style={styles.tx}>Какую игру найдем{"\n"}на этот раз?</Text>
        <StatusBar style="auto" />
        <View style={{backgroundColor:'#fff', width: '90%',}}>
          <View style={{alignItems: 'center',}}>
            <View style={styles.miniBlok}>

              <View style={styles.inputBox}>
                <TextInput
                  placeholder='Количество детей'
                  style={styles.textinBlok}
                />
              </View>
  
              <View style={styles.hr}></View>

              <View style={styles.inputBox}>
                <TextInput
                  placeholder='время'
                  style={styles.textinBlok}
                />
              </View>

              <View style={styles.hr}></View>

              <View style={styles.inputBox}>
                <TextInput
                  placeholder='Категория'
                  style={styles.textinBlok}
                />
              </View>
            </View> 

          </View>
        
            <View style={{flexDirection: 'row', justifyContent:'center' }}>
              <TouchableOpacity style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 30,
                marginTop: 30,
                marginRight: 5,
                justifyContent: 'center',
                marginLeft: 5,
                paddingVertical: 8,
                paddingHorizontal:  10,
                backgroundColor: '#DCDCDC',
                borderRadius: 800,
                elevation: 2,
                shadowColor: '#000',
                shadowOffset: { width: 2, helgth: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 2.5, width: 38,
                }}>
                <View style={{
                  justifyContent: 'center', 
                  width: 30, 
                  alignItems: 'center',
                  }}>
                  <Image style={{ height: 12, width: 26,}}
                    source={require('/icon/225.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundedButton}>
               <Text style={{fontSize: 14,}}>Знакомство</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundedButton}>
               <Text style={{fontSize: 14,}}>Командообразование</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 22, fontWeight: 'bold',marginBottom: 20,}}>
                Популярные
              </Text>
              <Text style={{fontSize: 16,}}>Все 20</Text>
            </View>
            <View style={{alignItems: 'center',}}>
              
               <View style={styles.container}>
                   <ScrollView showsVerticalScrollIndicator={false}>
                     {cart.length > 0 ? (
                       <View>
                         {cart
                           .sort((a, b) => a.name > b.name)
                           .map((product) => (
                             <View style={styles.bBlok}>
                               <View style={{
                                flexDirection: 'row',
                                justifyContent:'space-between',
                                }}>
                                <Text style={{fontSize: 18,}}>{product.name}</Text>
                                   <View style={{
                                     justifyContent: 'center', 
                                     width: 30, 
                                     alignItems: 'center',
                                     }}>
                                     <TouchableOpacity style={styles.postStatsOpacity}>
                                       <Image style={{ height: 25, width: 25,}}
                                       source={require('/icon/like.png')}
                                       />
                                        <Text
                                         style={{
                                         marginLeft: 6,
                                         fontFamily: 'NSRegular',
                                         color: '#fff',
                                         }}
                                        />
                                     </TouchableOpacity>
                                   </View>
                               </View>
                                 <View style={{
                                      height: 100,
                                      justifyContent:'space-between',
                                     }}>
                                   <Text style={{
                                     marginTop: 5,
                                     marginBottom: 0,
                                     marginRight: 20,
                                     fontSize: 14,
                                     }}>{product.dopText}</Text>
                                   <View style={{
                                     flexDirection: 'row',
                                   }}>
                                   <View style={styles.cocc3}>
                                   <Image style={styles.imBlok}
                                     source={require('/icon/star.png')}
                                   />
                                   </View>

                                   <Text style={styles.simm}>{product.reyting}</Text>
                                   <View style={styles.cocc3}>
                                   <Image style={styles.imBlok}
                                     source={require('/icon/man.png')}
                                   />
                                   </View>
                                   <Text style={styles.simm}>{product.price}</Text>
                                   <View style={styles.cocc3}>
                                   <Image style={styles.imBlok}
                                     source={require('/icon/clock.png')}
                                   />
                                   </View>
                                   <Text style={styles.simm}>{product.perPrice}</Text>
                                   </View>
                                 </View>
                             </View>
                           ))}
                       </View>
                     ) : (
                       <View style={styles.emptyCartView}>
                         <Text style={styles.emptyCartViewText}>Your cart is empty.</Text>
                       </View>
                     )}
                   </ScrollView>
               </View>
            </View>
        </View>

        <View style={{ alignItems:'center'}}>
          
        </View>

      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    colotr:'#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cocc3: {
   justifyContent: 'center', 
   width: 30, 
   alignItems: 'center',
  },
  imBlok: {
    height: 14,
    width: 14,
  },
  miniBlok: {
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#DCDCDC',
  },
  bBlok: {
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#DCDCDC',
  },
  emptyCartView: {
    flex: 1,
    marginTop: 140,
  },
  emptyCartViewText: {
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
  inputBox: {
    marginTop: 0,
  }, 
  simm: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 14,
    textAlign: 'center',
    color:'#000',
  },
  tx: {
    marginTop: 120,
    marginBottom: 30,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#000',
  },
  roundedButton: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
    marginRight: 5,
    justifyContent: 'center',
    marginLeft: 5,
    paddingVertical: 8,
    paddingHorizontal:  10,
    backgroundColor: '#DCDCDC',
    borderRadius: 800,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, helgth: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
  },
  txt: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000',
  },
  hr: {
    width: '100%',
    height: 0.9,
    backgroundColor: '#444',
    marginTop: 6,
    marginBottom: 6,
  },
  textinBlok: {
   color:'#696969',
   fontSize: 15,
   margin: 3,
  },
});

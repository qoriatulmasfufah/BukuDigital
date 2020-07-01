/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import normalize from './components/normalize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import PieChart from 'react-native-pie-chart';

const { width, height } = Dimensions.get('window');
const assetsImage = './assets/';


// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPengumpulanTugas: [
        {
          "key": "1",
          "namaTugas": "Tugas Seni Budaya",
          "deskripsi1": "Dikumpulkan di folder google drive, link di grup wa",
          "deskripsi2": "Batas pengumpulan tugas - 12.00 WIB",
          "namaGuru": "Arini, S.Pd"
        },
        {
          "key": "2",
          "namaTugas": "Tugas Sejarah",
          "deskripsi1": "Dikumpulkan di folder google drive, link di grup wa",
          "deskripsi2": "Batas pengumpulan tugas - 12.00 WIB",
          "namaGuru": "Arini, S.Pd"
        }
      ],
      dataBelajar: [
        {
          "key": "1",
          "namaTugas": "Matematika",
          "deskripsi1": "Bab 1 - Algorima Dasar",
          "deskripsi2": "Terakhir di buka pada 8 Juni 2020",
          "image": require(assetsImage + 'tumbnail.png'),
        },
        {
          "key": "2",
          "namaTugas": "Matematika",
          "deskripsi1": "Bab 1 - Algorima Dasar",
          "deskripsi2": "Terakhir di buka pada 8 Juni 2020",
          "image": require(assetsImage + 'tumbnail.png'),
        },
        {
          "key": "3",
          "namaTugas": "Matematika",
          "deskripsi1": "Bab 1 - Algorima Dasar",
          "deskripsi2": "Terakhir di buka pada 8 Juni 2020",
          "image": require(assetsImage + 'tumbnail.png'),
        },
        {
          "key": "4",
          "namaTugas": "Matematika",
          "deskripsi1": "Bab 1 - Algorima Dasar",
          "deskripsi2": "Terakhir di buka pada 8 Juni 2020",
          "image": require(assetsImage + 'tumbnail.png'),
        }
      ],
      dataIcon: [
        {
          "key": "1",
          "icon": "film",
          "mapel": "semua",
          "color": 'gray'
        },
        {
          "key": "2",
          "icon": "activity",
          "mapel": "Matematika",
          "color": "#ee5954"
        },
        {
          "key": "3",
          "icon": "cloud-snow",
          "mapel": "Fisika",
          "color": "#5ce1e6"
        },
        {
          "key": '4',
          "icon": "anchor",
          "mapel": "Kimia",
          "color": "#38b6ff"
        },
        {
          "key": '5',
          "icon": "compass",
          "mapel": "Biologi",
          "color": "#ffde59"
        },
      ]
    }
  }



  render() {
    const topHome = require(assetsImage + 'top_home.png');
    const avatar = require(assetsImage + 'avatar.jpg');
    const tumbnail = require(assetsImage + 'tumbnail.png')
    const localStyles = getStyles(height);
    const chart_wh = 250
    const series = [80, 70, 60, 80]
    const sliceColor = ['#ee5954', '#38b6ff', '#5ce1e6', '#ffde59']
    return (
      <View style={localStyles.flex}>
        <ScrollView style={localStyles.flex}>
          <Image
            source={topHome}
            style={{ width: width, height: normalize(250), resizeMode: 'cover' }} />
          <View
            style={[localStyles.header]}>
            <View style={localStyles.containerHeader}>
              <FontAwesome
                name={"bars"}
                color={'white'}
                size={normalize(30)}
                style={{ marginRight: normalize(10) }}
              />
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Buku Digitalku 4.0</Text>
              <FontAwesome
                name={"search"}
                color={'white'}
                size={normalize(25)}
                style={{ marginRight: normalize(10) }}
              />
            </View>
          </View>
          <View style={{ position: 'absolute', zIndex: 5, paddingLeft: normalize(20), top: 100 }}>
            <Text style={{ color: 'white', fontSize: normalize(15) }}>Hai !{'\n'}<Text style={{ fontWeight: 'bold', color: 'white', fontSize: normalize(15) }}>Adelia</Text></Text>
            <Image
              source={avatar}
              style={{ width: 80, height: 80, borderRadius: 40, marginTop: normalize(10) }} />
          </View>

          {/* hello */}
          <View style={{ backgroundColor: '#363562', width: 90, height: 90, borderRadius: 45, alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute', top: 225, left: 130 }}>
            <Text style={{ color: 'white', fontSize: normalize(13), marginTop: normalize(8) }}>Kelas {'\n'}<Text style={{ fontSize: normalize(38), fontWeight: 'bold', color: 'white' }}>XI</Text></Text>
          </View>

          {/* Mapel */}
          <View style={{ marginTop: normalize(15), flexDirection: 'row' }}>
            <View style={{ width: '70%', }} />
            <Text style={{ fontSize: 15, paddingLeft: 40, fontWeight: 'bold' }}>Guru</Text>
          </View>
          <View style={{ backgroundColor: "white", flex: 1, marginTop: normalize(10) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={localStyles.containerMapel1}>
                <View style={localStyles.containerMapel2}>
                  <Text style={localStyles.textMapel}>Matematika</Text>
                  <Feather
                    name={"activity"}
                    color={'white'}
                    size={normalize(25)}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 8 }}>
                <Image
                  source={avatar}
                  style={localStyles.avatar1} />
                <Image
                  source={avatar}
                  style={[localStyles.avatar1, localStyles.avatar2]} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: normalize(10) }}>
              <View style={[localStyles.containerMapel1, { backgroundColor: '#5ce1e6' }]}>
                <View style={localStyles.containerMapel2}>
                  <Text style={localStyles.textMapel}>Biologi</Text>
                  <Feather
                    name={"cloud-snow"}
                    color={'white'}
                    size={normalize(25)}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 8 }}>
                <Image
                  source={avatar}
                  style={localStyles.avatar1} />
                <Image
                  source={avatar}
                  style={[localStyles.avatar1, localStyles.avatar2]} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: normalize(10) }}>
              <View style={[localStyles.containerMapel1, { backgroundColor: '#38b6ff' }]}>
                <View style={localStyles.containerMapel2}>
                  <Text style={localStyles.textMapel}>Fisika</Text>
                  <Feather
                    name={"anchor"}
                    color={'white'}
                    size={normalize(25)}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 8 }}>
                <Image
                  source={avatar}
                  style={localStyles.avatar1} />
                <Image
                  source={avatar}
                  style={[localStyles.avatar1, localStyles.avatar2]} />
              </View>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: normalize(10) }}>
              <View style={[localStyles.containerMapel1, { backgroundColor: '#ffde59' }]}>
                <View style={localStyles.containerMapel2}>
                  <Text style={localStyles.textMapel}>Kimia</Text>
                  <Feather
                    name={"compass"}
                    color={'white'}
                    size={normalize(25)}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 8 }}>
                <Image
                  source={avatar}
                  style={localStyles.avatar1} />
                <Image
                  source={avatar}
                  style={[localStyles.avatar1, localStyles.avatar2]} />
              </View>
            </View>


            <View style={{ marginTop: normalize(10) }}>
              <View style={[localStyles.containerMapel1, { backgroundColor: '#a6a6a6' }]}>
                <View style={localStyles.containerMapel2}>
                  <Text style={localStyles.textMapel}>Lainnya</Text>
                  <Feather
                    name={"film"}
                    color={'white'}
                    size={normalize(25)}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* tumbnail */}
          <View style={localStyles.containerTitle}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Materi Terbaru</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: 'black', fontWeight: "bold" }}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: normalize(10), alignItems: "center", justifyContent: 'center', flex: 1 }}>
            <Image
              source={tumbnail}
              style={{ width: 200, height: 100, paddingRight: normalize(10), resizeMode: 'contain', borderRadius: 30 }} />
            <Image
              source={tumbnail}
              style={{ width: 200, height: 100, paddingRight: normalize(10), resizeMode: 'contain', borderRadius: 30 }} />
          </View>

          {/* Pengumuman Tugas */}
          <View style={localStyles.containerTitle}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Pengumuman Tugas (99+)</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: normalize(10), paddingLeft: normalize(12), paddingRight: normalize(12) }}>
            <FlatList
              data={this.state.dataPengumpulanTugas}
              keyExtractor={item => item.key}
              renderItem={({ item }) => (
                <View style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  padding: normalize(12),
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 2,
                  elevation: 2,
                  borderRadius: normalize(10),
                  marginBottom: 10
                }}
                >
                  <View style={{ flex: 0.95 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: normalize(15) }}>{item.namaTugas}</Text>
                    <Text>{item.deskripsi1}</Text>
                    <Text style={{ paddingTop: normalize(5) }}>{item.deskripsi2}</Text>
                    <Text>{item.namaGuru}</Text>
                  </View>
                  <View style={{ flex: 0.05 }}>
                    <FontAwesome
                      name={"close"}
                      color={'black'}
                      size={normalize(15)}
                    />
                  </View>
                </View>
              )}
            />
          </View>

          {/* Belajar Terakhir */}
          <View style={localStyles.containerTitle}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Belajar Terakhir</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Lihat semua</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: normalize(10), paddingLeft: normalize(12), paddingRight: normalize(12) }}>
            <FlatList
              data={this.state.dataBelajar}
              keyExtractor={item => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: "center",
                  paddingRight: normalize(10),
                  paddingLeft: normalize(10),
                  shadowColor: 'black',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 2,
                  elevation: 2,
                  borderRadius: normalize(10),
                  marginBottom: 10
                }}
                  onPress={() => alert(item.namaTugas)}
                >
                  <View style={{ flex: 0.28, justifyContent: "center", alignContent: 'center' }}>
                    <Image
                      source={tumbnail}
                      style={{ width: 80, height: 80, resizeMode: 'contain', borderRadius: 9 }} />
                  </View>
                  <View style={{ flex: 0.72 }}>
                    <Text style={{ fontSize: normalize(11) }}>{item.namaTugas}</Text>
                    <Text style={{ fontSize: normalize(15), fontWeight: 'bold', color: 'black' }}>{item.deskripsi1}</Text>
                    <Text style={{ fontSize: normalize(10) }}>{item.deskripsi2}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Hasil Belajarmu */}
          <View style={localStyles.containerTitle}>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Hasil Belajarmu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderBottomWidth: 4, borderColor: 'blue' }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Hasil Pencapaianmu</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingLeft: normalize(12), paddingRight: normalize(12), paddingTop: normalize(10) }}>
            <FlatList
              data={this.state.dataIcon}
              horizontal={true}
              keyExtractor={item => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity style={{
                  backgroundColor: 'white',
                  marginBottom: 10,
                  paddingRight: normalize(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: item.color, justifyContent: 'center', alignItems: 'center' }}>
                    <Feather
                      name={item.icon}
                      color={'white'}
                      size={normalize(20)}
                    />
                  </View>
                  <Text style={{ fontSize: normalize(9), color: 'black' }}>{item.mapel}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: normalize(12) }}>
            <Text style={{ fontSize: normalize(15), color: 'black', fontWeight: 'bold' }}>Semua statistik</Text>
            <Text style={{ fontSize: normalize(10), color: 'black' }}>Semua Mata Pelajaran</Text>
            <View style={{ paddingTop: normalize(20), justifyContent: 'center', alignItems: 'center' }}>
              <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={'#FFF'}
              />
              <View style={{ paddingTop: normalize(20), alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: normalize(10), color: 'black' }}>Total Latihan</Text>
                  <Text style={{ fontSize: normalize(10), color: 'black', fontWeight: "bold" }}>10 / 50</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ fontSize: normalize(10), color: 'black' }}>Total Pertanyaan</Text>
                  <Text style={{ fontSize: normalize(10), color: 'black', fontWeight: "bold" }}>100 / 350</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: normalize(10), color: 'black' }}>Kecepatan Menjawab</Text>
                  <Text style={{ fontSize: normalize(10), color: 'black', fontWeight: "bold" }}>10 Menit / Soal</Text>
                </View>
              </View>
            </View>

          </View>

        </ScrollView>
      </View >
    );
  }
}

const getStyles = (height) => {
  return {
    flex: {
      flex: 1
    },
    avatar1: {
      width: normalize(44), height: normalize(44), borderRadius: normalize(22)
    },
    avatar2: {
      zIndex: 2,
      position: 'absolute',
      left: 48,
      borderWidth: 2,
      borderColor: 'white'
    },
    header: {
      width: '100%',
      height: height * 0.085,
      position: 'absolute',
      zIndex: 2
      // backgroundColor: '#363562',
    },
    containerHeader: {
      flex: 1,
      flexDirection: 'row',
      paddingRight: normalize(15),
      paddingLeft: normalize(15),
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    containerTitle: {
      paddingTop: normalize(15),
      flexDirection: "row",
      justifyContent: 'space-between',
      paddingLeft: normalize(12),
      paddingRight: normalize(12)
    },
    containerMapel1: {
      width: '70%',
      height: normalize(48),
      backgroundColor: '#ee5954',
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
      justifyContent: 'center',
    },
    containerMapel2: {
      flexDirection: 'row',
      paddingLeft: normalize(10),
      justifyContent: 'space-around'
    },
    textMapel: {
      color: 'white',
      fontSize: normalize(18),
      fontWeight: 'bold'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E74C3C'
    },
    winner: {
      width: '100%',
      position: 'absolute',
      padding: 10,
      backgroundColor: '#fff',
      bottom: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    winnerText: {
      fontSize: 26,
      color: '#666'
    },
    tapToStart: {
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold'
    }
  }
};

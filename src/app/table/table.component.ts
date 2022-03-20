import { Component, OnInit } from '@angular/core';

enum State {
  solid = 'solid',
  liquid = 'liquid',
  gas = 'gas',
  unknown = 'unknown',
}

export interface Atomic {
  atomic: Number | null;
  symbol: String;
  name: String;
  weight: Number | null;
  bgColor: String;
  state: State;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  emptyAtomic = {} as Atomic;
  atomics: Atomic[][] = [
    [
      {
        atomic: 1,
        symbol: 'H',
        name: 'ไฮโดรเจน',
        weight: 1.008,
        bgColor: '#8CED8C',
        state: State.gas,
      },
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      {
        atomic: 2,
        symbol: 'He',
        name: 'ฮีเลียม',
        weight: 4.0026,
        bgColor: '#e5bde5',
        state: State.gas,
      },
    ],
    [
      {
        atomic: 3,
        symbol: 'Li',
        name: 'ลิเทียม',
        weight: 6.94,
        bgColor: '#eace5d',
        state: State.solid,
      },
      {
        atomic: 4,
        symbol: 'Be',
        name: 'เบริลเลียม',
        weight: 9.0122,
        bgColor: '#f1f165',
        state: State.solid,
      },
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      {
        atomic: 5,
        symbol: 'B',
        name: 'โบรอน',
        weight: 10.81,
        bgColor: '#9ee5d4',
        state: State.solid,
      },
      {
        atomic: 6,
        symbol: 'C',
        name: 'คาร์บอน',
        weight: 12.011,
        bgColor: '#8ced8c',
        state: State.solid,
      },
      {
        atomic: 7,
        symbol: 'N',
        name: 'ไนโตรเจน',
        weight: 14.007,
        bgColor: '#8ced8c',
        state: State.gas,
      },
      {
        atomic: 8,
        symbol: 'O',
        name: 'ออกซิเจน',
        weight: 15.999,
        bgColor: '#8ced8c',
        state: State.gas,
      },
      {
        atomic: 9,
        symbol: 'F',
        name: 'ฟลูออรีน',
        weight: 18.998,
        bgColor: '#8ced8c',
        state: State.gas,
      },
      {
        atomic: 10,
        symbol: 'Ne',
        name: 'นีออน',
        weight: 20.18,
        bgColor: '#e5bde5',
        state: State.gas,
      },
    ],
    [
      {
        atomic: 11,
        symbol: 'Na',
        name: 'โซเดียม',
        weight: 22.99,
        bgColor: '#eace5d',
        state: State.solid,
      },
      {
        atomic: 12,
        symbol: 'Mg',
        name: 'แมกนีเซียม',
        weight: 24.305,
        bgColor: '#f1f165',
        state: State.solid,
      },
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      this.emptyAtomic,
      {
        atomic: 13,
        symbol: 'Al',
        name: 'อะลูมิเนียม',
        weight: 26.982,
        bgColor: '#acdfec',
        state: State.solid,
      },
      {
        atomic: 14,
        symbol: 'Si',
        name: 'ซิลิคอน',
        weight: 28.085,
        bgColor: '#9ee5d4',
        state: State.solid,
      },
      {
        atomic: 15,
        symbol: 'P',
        name: 'ฟอสฟอรัส',
        weight: 30.974,
        bgColor: '#8ced8c',
        state: State.solid,
      },
      {
        atomic: 16,
        symbol: 'S',
        name: 'กำมะถัน',
        weight: 32.06,
        bgColor: '#8ced8c',
        state: State.solid,
      },
      {
        atomic: 17,
        symbol: 'Ci',
        name: 'คลอรีน',
        weight: 35.45,
        bgColor: '#8ced8c',
        state: State.gas,
      },
      {
        atomic: 18,
        symbol: 'Ar',
        name: 'อาร์กอน',
        weight: 39.948,
        bgColor: '#e5bde5',
        state: State.gas,
      },
    ],
    [
      {
        atomic: 19,
        symbol: 'K',
        name: 'โพแทสเซียม',
        weight: 39.098,
        bgColor: '#eace5d',
        state: State.solid,
      },
      {
        atomic: 20,
        symbol: 'Ca',
        name: 'แคลเซียม',
        weight: 40.078,
        bgColor: '#f1f165',
        state: State.solid,
      },
      {
        atomic: 21,
        symbol: 'Sc',
        name: 'สแกนเดียม',
        weight: 44.956,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 22,
        symbol: 'Ti',
        name: 'ไทเทเนียม',
        weight: 47.867,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 23,
        symbol: 'V',
        name: 'วาเนเดียม',
        weight: 50.942,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 24,
        symbol: 'Cr',
        name: 'โครเมียม',
        weight: 51.996,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 25,
        symbol: 'Mn',
        name: 'แมงกานีส',
        weight: 54.938,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 26,
        symbol: 'Fe',
        name: 'เหล็ก',
        weight: 55.845,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 27,
        symbol: 'Co',
        name: 'โคบอลต์',
        weight: 58.933,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 28,
        symbol: 'Ni',
        name: 'นิกเกิล',
        weight: 58.693,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 29,
        symbol: 'Cu',
        name: 'ทองแดง',
        weight: 63.546,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 30,
        symbol: 'Zn',
        name: 'สังกะสี',
        weight: 65.38,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 31,
        symbol: 'Ga',
        name: 'แกลเลียม',
        weight: 69.723,
        bgColor: '#acdfec',
        state: State.solid,
      },
      {
        atomic: 32,
        symbol: 'Ge',
        name: 'เจอร์เมเนียม',
        weight: 72.63,
        bgColor: '#9ee5d4',
        state: State.solid,
      },
      {
        atomic: 33,
        symbol: 'As',
        name: 'สารหนู',
        weight: 74.922,
        bgColor: '#9ee5d4',
        state: State.solid,
      },
      {
        atomic: 34,
        symbol: 'Se',
        name: 'ซีลีเนียม',
        weight: 78.971,
        bgColor: '#8ced8c',
        state: State.solid,
      },
      {
        atomic: 35,
        symbol: 'Br',
        name: 'โบรมีน',
        weight: 79.904,
        bgColor: '#8ced8c',
        state: State.liquid,
      },
      {
        atomic: 36,
        symbol: 'Kr',
        name: 'คริปทอน',
        weight: 83.798,
        bgColor: '#e5bde5',
        state: State.gas,
      },
    ],
    [
      {
        atomic: 37,
        symbol: 'Rb',
        name: 'รูบิเดียม',
        weight: 85.468,
        bgColor: '#eace5d',
        state: State.solid,
      },
      {
        atomic: 38,
        symbol: 'Sr',
        name: 'สตรอนเชียม',
        weight: 87.62,
        bgColor: '#f1f165',
        state: State.solid,
      },
      {
        atomic: 39,
        symbol: 'Y',
        name: 'อิตเทรียมอิตเทรียม',
        weight: 88.906,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 40,
        symbol: 'Zr',
        name: 'เซอร์โคเนียม',
        weight: 91.224,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 41,
        symbol: 'Nb',
        name: 'ไนโอเบียม',
        weight: 92.906,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 42,
        symbol: 'Mo',
        name: 'โมลิบดีนัม',
        weight: 95.95,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 43,
        symbol: 'Tc',
        name: 'เทคนีเชียม',
        weight: 98,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 44,
        symbol: 'Ru',
        name: 'รูทีเนียม',
        weight: 101.07,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 45,
        symbol: 'Rh',
        name: 'โรเดียม',
        weight: 102.91,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 46,
        symbol: 'Pb',
        name: 'แพลเลเดียม',
        weight: 106.42,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 47,
        symbol: 'Ag',
        name: 'เงิน',
        weight: 107.87,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 48,
        symbol: 'Cd',
        name: 'แคดเมียม',
        weight: 112.41,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 49,
        symbol: 'In',
        name: 'อินเดียม',
        weight: 114.82,
        bgColor: '#acdfec',
        state: State.solid,
      },
      {
        atomic: 50,
        symbol: 'Sn',
        name: 'ดีบุก',
        weight: 118.71,
        bgColor: '#acdfec',
        state: State.solid,
      },
      {
        atomic: 51,
        symbol: 'Sb',
        name: 'พลวง',
        weight: 121.76,
        bgColor: '#9ee5d4',
        state: State.solid,
      },
      {
        atomic: 52,
        symbol: 'Te',
        name: 'เทลลูเรียม',
        weight: 127.6,
        bgColor: '#8ced8c',
        state: State.solid,
      },
      {
        atomic: 53,
        symbol: 'I',
        name: 'ไอโอดีน',
        weight: 126.9,
        bgColor: '#8ced8c',
        state: State.liquid,
      },
      {
        atomic: 54,
        symbol: 'Xe',
        name: 'ซีนอน',
        weight: 131.29,
        bgColor: '#e5bde5',
        state: State.gas,
      },
    ],
    [
      {
        atomic: 55,
        symbol: 'Cs',
        name: 'ซีเซียม',
        weight: 132.91,
        bgColor: '#eace5d',
        state: State.solid,
      },
      {
        atomic: 56,
        symbol: 'Ba',
        name: 'แบเรียม',
        weight: 137.33,
        bgColor: '#f1f165',
        state: State.solid,
      },
      {
        atomic: null,
        symbol: '57 - 71',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: 72,
        symbol: 'Hf',
        name: 'แฮฟเนียม',
        weight: 178.49,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 73,
        symbol: 'Ta',
        name: 'แทนทาลัม',
        weight: 180.95,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 74,
        symbol: 'W',
        name: 'ทังสเตน',
        weight: 183.84,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 75,
        symbol: 'Re',
        name: 'รีเนียม',
        weight: 186.21,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 76,
        symbol: 'Os',
        name: 'ออสเมียม',
        weight: 190.23,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 77,
        symbol: 'Ir',
        name: 'อิริเดียม',
        weight: 192.22,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 78,
        symbol: 'Pt',
        name: 'แพลทินัม',
        weight: 195.08,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 79,
        symbol: 'Au',
        name: 'ทองคำ',
        weight: 196.97,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 80,
        symbol: 'Hg',
        name: 'ปรอท',
        weight: 200.59,
        bgColor: '#fac5b7',
        state: State.liquid,
      },
      {
        atomic: 81,
        symbol: 'Tl',
        name: 'แทลเลียม',
        weight: 204.38,
        bgColor: '#acdfec',
        state: State.solid,
      },
      {
        atomic: 82,
        symbol: 'Pb',
        name: 'ตะกั่ว',
        weight: 207.2,
        bgColor: '#acdfec',
        state: State.solid,
      },
      {
        atomic: 83,
        symbol: 'Bi',
        name: 'บิสมัท',
        weight: 208.98,
        bgColor: '#9ee5d4',
        state: State.solid,
      },
      {
        atomic: 84,
        symbol: 'Po',
        name: 'พอโลเนียม',
        weight: 209,
        bgColor: '#8ced8c',
        state: State.solid,
      },
      {
        atomic: 85,
        symbol: 'At',
        name: 'แอสทาทีน',
        weight: 210,
        bgColor: '#8ced8c',
        state: State.solid,
      },
      {
        atomic: 86,
        symbol: 'Rn',
        name: 'เรดอน',
        weight: 222,
        bgColor: '#e5bde5',
        state: State.gas,
      },
    ],
    [
      {
        atomic: 87,
        symbol: 'Fr',
        name: 'แฟรนเซียม',
        weight: 223,
        bgColor: '#eace5d',
        state: State.solid,
      },
      {
        atomic: 88,
        symbol: 'Ra',
        name: 'เรเดียม',
        weight: 226,
        bgColor: '#f1f165',
        state: State.solid,
      },
      {
        atomic: null,
        symbol: '89-103',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: 104,
        symbol: 'Rf',
        name: 'รัทเทอร์ฟอร์เดียม',
        weight: 267,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 105,
        symbol: 'Db',
        name: 'ดุบเนียม',
        weight: 268,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 106,
        symbol: 'Sg',
        name: 'ซีบอร์เกียม',
        weight: 269,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 107,
        symbol: 'Bh',
        name: 'โบห์เรียม',
        weight: 270,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 108,
        symbol: 'Hs',
        name: 'ฮัสเซียม',
        weight: 277,
        bgColor: '#fac5b7',
        state: State.solid,
      },
      {
        atomic: 109,
        symbol: 'Mt',
        name: 'ไมต์เนเรียม',
        weight: 278,
        bgColor: '#fac5b7',
        state: State.unknown,
      },
      {
        atomic: 110,
        symbol: 'Ds',
        name: 'ดาร์มสตัดเทียม',
        weight: 281,
        bgColor: '#fac5b7',
        state: State.unknown,
      },
      {
        atomic: 111,
        symbol: 'Rg',
        name: 'เรินต์เกเนียม',
        weight: 282,
        bgColor: '#fac5b7',
        state: State.unknown,
      },
      {
        atomic: 112,
        symbol: 'Cn',
        name: 'โคเปอร์นิเซียม',
        weight: 285,
        bgColor: '#fac5b7',
        state: State.unknown,
      },
      {
        atomic: 113,
        symbol: 'Nh',
        name: 'นิโฮเนียม',
        weight: 286,
        bgColor: '#acdfec',
        state: State.unknown,
      },
      {
        atomic: 114,
        symbol: 'Fl',
        name: 'ฟลิโรเวียม',
        weight: 289,
        bgColor: '#acdfec',
        state: State.unknown,
      },
      {
        atomic: 115,
        symbol: 'Mc',
        name: 'มอสโกเวียม',
        weight: 290,
        bgColor: '#9ee5d4',
        state: State.unknown,
      },
      {
        atomic: 116,
        symbol: 'Lv',
        name: 'ลิเวอร์มอเรียม',
        weight: 293,
        bgColor: '#8ced8c',
        state: State.unknown,
      },
      {
        atomic: 117,
        symbol: 'Ts',
        name: 'เทนเนสซีน',
        weight: 294,
        bgColor: '#8ced8c',
        state: State.unknown,
      },
      {
        atomic: 118,
        symbol: 'Og',
        name: 'โอกาเนสซอน',
        weight: 294,
        bgColor: '#e5bde5',
        state: State.unknown,
      },
    ],
  ];

  atomicsExtend: Atomic[][] = [
    [
      {
        atomic: null,
        symbol: '',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: null,
        symbol: '',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: null,
        symbol: '',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: 57,
        symbol: 'La',
        name: 'แลนทานัม',
        weight: 138.91,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 58,
        symbol: 'Ce',
        name: 'ซีเรียม',
        weight: 140.12,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 59,
        symbol: 'Pr',
        name: 'เพรซีโอดิเมียม',
        weight: 140.91,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 60,
        symbol: 'Nd',
        name: 'นีโอดิเมียม',
        weight: 144.24,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 61,
        symbol: 'Pm',
        name: 'โพรมีเทียม',
        weight: 145,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 62,
        symbol: 'Sm',
        name: 'ซาแมเรียม',
        weight: 150.36,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 63,
        symbol: 'Eu',
        name: 'ยูโรเพียม',
        weight: 151.96,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 64,
        symbol: 'Gd',
        name: 'แกโดลิเนียม',
        weight: 157.25,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 65,
        symbol: 'Tb',
        name: 'เทอร์เบียม',
        weight: 158.93,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 66,
        symbol: 'Dy',
        name: 'ดิสโพรเซียม',
        weight: 162.5,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 67,
        symbol: 'Ho',
        name: 'โฮลเมียม',
        weight: 164.93,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 68,
        symbol: 'Er',
        name: 'เออร์เบียม',
        weight: 167.26,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 69,
        symbol: 'Tm',
        name: 'ทูเลียม',
        weight: 168.93,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 70,
        symbol: 'Yb',
        name: 'อิตเทอร์เบียม',
        weight: 173.05,
        bgColor: '#e8d19c',
        state: State.solid,
      },
      {
        atomic: 71,
        symbol: 'Lu',
        name: 'ลูทีเชียม',
        weight: 174.97,
        bgColor: '#e8d19c',
        state: State.solid,
      },
    ],
    [
      {
        atomic: null,
        symbol: '',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: null,
        symbol: '',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: null,
        symbol: '',
        name: '',
        weight: null,
        bgColor: '#fff',
        state: State.solid,
      },
      {
        atomic: 89,
        symbol: 'Ac',
        name: 'แอกทิเนียม',
        weight: 227,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 90,
        symbol: 'Th',
        name: 'ทอเรียม',
        weight: 232.04,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 91,
        symbol: 'Pa',
        name: 'โพรแทกทิเนียม',
        weight: 231.04,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 92,
        symbol: 'U',
        name: 'ยูเรเนียม',
        weight: 238.03,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 93,
        symbol: 'Np',
        name: 'เนปทูเนียม',
        weight: 237,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 94,
        symbol: 'Pu',
        name: 'พลูโทเนียม',
        weight: 244,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 95,
        symbol: 'Am',
        name: 'อะเมริเซียม',
        weight: 243,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 96,
        symbol: 'Cm',
        name: 'คูเรียม',
        weight: 247,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 97,
        symbol: 'Bk',
        name: 'เบอร์คีเลียม',
        weight: 247,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 98,
        symbol: 'Cf',
        name: 'แคลิฟอร์เนียม',
        weight: 251,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 99,
        symbol: 'Es',
        name: 'ไอน์สไตเนียม',
        weight: 252,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 100,
        symbol: 'Fm',
        name: 'เฟอร์เมียม',
        weight: 257,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 101,
        symbol: 'Md',
        name: 'เมนเดลีเวียม',
        weight: 258,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 102,
        symbol: 'No',
        name: 'โนเบเลียม',
        weight: 259,
        bgColor: '#f5ccda',
        state: State.solid,
      },
      {
        atomic: 103,
        symbol: 'Lr',
        name: 'ลอว์เรนเซียม',
        weight: 266,
        bgColor: '#f5ccda',
        state: State.solid,
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
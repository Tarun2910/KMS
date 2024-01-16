import {blue, orange} from '@mui/material/colors';

const cryptoData = {
  // coinGraphData: {
  //   bitcoin: {
  //     yearlyData: [
  //       { month: 'Jan', amount: 6000 },
  //       { month: 'Feb', amount: 4800 },
  //       { month: 'Mar', amount: 6500 },
  //       { month: 'Apr', amount: 6000 },
  //       { month: 'May', amount: 7800 },
  //       { month: 'Jun', amount: 9000 },
  //       { month: 'Jul', amount: 6000 },
  //       { month: 'Aug', amount: 7000 },
  //       { month: 'Sep', amount: 3700 },
  //       { month: 'Oct', amount: 7800 },
  //       { month: 'Nov', amount: 5800 },
  //       { month: 'Dec', amount: 6500 },
  //     ],
  //     monthlyData: [
  //       { date: '1', amount: 6000 },
  //       { date: '2', amount: 4800 },
  //       { date: '3', amount: 6500 },
  //       { date: '4', amount: 6000 },
  //       { date: '5', amount: 7800 },
  //       { date: '6', amount: 9000 },
  //       { date: '7', amount: 6000 },
  //       { date: '8', amount: 7000 },
  //       { date: '9', amount: 3700 },
  //       { date: '10', amount: 7800 },
  //       { date: '11', amount: 5800 },
  //       { date: '12', amount: 6500 },
  //       { date: '13', amount: 7200 },
  //       { date: '14', amount: 6500 },
  //       { date: '15', amount: 2344 },
  //       { date: '16', amount: 4243 },
  //       { date: '17', amount: 5343 },
  //       { date: '18', amount: 2435 },
  //       { date: '19', amount: 4322 },
  //       { date: '20', amount: 2545 },
  //       { date: '21', amount: 3234 },
  //       { date: '22', amount: 4233 },
  //       { date: '23', amount: 2444 },
  //       { date: '24', amount: 6543 },
  //       { date: '25', amount: 4223 },
  //       { date: '26', amount: 4323 },
  //       { date: '27', amount: 2345 },
  //       { date: '28', amount: 2345 },
  //       { date: '29', amount: 5676 },
  //       { date: '30', amount: 2345 },
  //     ],
  //     weeklyData: [
  //       { day: 'Monday', amount: 6000 },
  //       { day: 'Tuesday', amount: 4800 },
  //       { day: 'Wednesday', amount: 6500 },
  //       { day: 'Thrusday', amount: 6000 },
  //       { day: 'Friday', amount: 7800 },
  //       { day: 'Saturday', amount: 9000 },
  //       { day: 'Sunday', amount: 6000 },
  //     ],
  //     dailyData: [
  //       { time: '00:00', amount: 2444 },
  //       { time: '01:00', amount: 6000 },
  //       { time: '02:00', amount: 4800 },
  //       { time: '03:00', amount: 6500 },
  //       { time: '04:00', amount: 6000 },
  //       { time: '05:00', amount: 7800 },
  //       { time: '06:00', amount: 9000 },
  //       { time: '07:00', amount: 6000 },
  //       { time: '08:00', amount: 7000 },
  //       { time: '09:00', amount: 3700 },
  //       { time: '10:00', amount: 7800 },
  //       { time: '11:00', amount: 5800 },
  //       { time: '12:00', amount: 6500 },
  //       { time: '13:00', amount: 7200 },
  //       { time: '14:00', amount: 6500 },
  //       { time: '15:00', amount: 2344 },
  //       { time: '16:00', amount: 4243 },
  //       { time: '17:00', amount: 5343 },
  //       { time: '18:00', amount: 2435 },
  //       { time: '19:00', amount: 4322 },
  //       { time: '20:00', amount: 2545 },
  //       { time: '21:00', amount: 3234 },
  //       { time: '22:00', amount: 4233 },
  //       { time: '23:00', amount: 2444 },
  //     ],
  //   },
  //   litecoin: {
  //     yearlyData: [
  //       { month: 'Jan', amount: 5600 },
  //       { month: 'Feb', amount: 4400 },
  //       { month: 'Mar', amount: 6000 },
  //       { month: 'Apr', amount: 4500 },
  //       { month: 'May', amount: 7000 },
  //       { month: 'Jun', amount: 6400 },
  //       { month: 'Jul', amount: 8000 },
  //       { month: 'Aug', amount: 6500 },
  //       { month: 'Sep', amount: 7000 },
  //       { month: 'Oct', amount: 5800 },
  //       { month: 'Nov', amount: 6200 },
  //       { month: 'Dec', amount: 5000 },
  //     ],
  //     monthlyData: [
  //       { date: '1', amount: 5600 },
  //       { date: '2', amount: 7000 },
  //       { date: '3', amount: 6400 },
  //       { date: '4', amount: 4500 },
  //       { date: '5', amount: 5500 },
  //       { date: '6', amount: 5900 },
  //       { date: '7', amount: 7500 },
  //       { date: '8', amount: 6500 },
  //       { date: '9', amount: 5400 },
  //       { date: '10', amount: 5000 },
  //       { date: '11', amount: 4400 },
  //       { date: '12', amount: 4900 },
  //       { date: '13', amount: 5500 },
  //       { date: '14', amount: 6300 },
  //       { date: '15', amount: 3944 },
  //       { date: '16', amount: 4243 },
  //       { date: '17', amount: 5043 },
  //       { date: '18', amount: 6935 },
  //       { date: '19', amount: 5622 },
  //       { date: '20', amount: 7645 },
  //       { date: '21', amount: 4034 },
  //       { date: '22', amount: 5633 },
  //       { date: '23', amount: 3944 },
  //       { date: '24', amount: 4543 },
  //       { date: '25', amount: 4023 },
  //       { date: '26', amount: 3623 },
  //       { date: '27', amount: 5045 },
  //       { date: '28', amount: 3645 },
  //       { date: '29', amount: 4576 },
  //       { date: '30', amount: 2945 },
  //     ],
  //     weeklyData: [
  //       { day: 'Monday', amount: 6500 },
  //       { day: 'Tuesday', amount: 5200 },
  //       { day: 'Wednesday', amount: 7800 },
  //       { day: 'Thrusday', amount: 3900 },
  //       { day: 'Friday', amount: 5200 },
  //       { day: 'Saturday', amount: 2600 },
  //       { day: 'Sunday', amount: 7800 },
  //     ],
  //     dailyData: [
  //       { time: '00:00', amount: 4500 },
  //       { time: '01:00', amount: 6000 },
  //       { time: '02:00', amount: 3500 },
  //       { time: '03:00', amount: 4300 },
  //       { time: '04:00', amount: 5500 },
  //       { time: '05:00', amount: 6300 },
  //       { time: '06:00', amount: 7000 },
  //       { time: '07:00', amount: 6000 },
  //       { time: '08:00', amount: 5200 },
  //       { time: '09:00', amount: 3900 },
  //       { time: '10:00', amount: 4600 },
  //       { time: '11:00', amount: 4000 },
  //       { time: '12:00', amount: 4800 },
  //       { time: '13:00', amount: 6400 },
  //       { time: '14:00', amount: 5200 },
  //       { time: '15:00', amount: 3944 },
  //       { time: '16:00', amount: 2543 },
  //       { time: '17:00', amount: 4043 },
  //       { time: '18:00', amount: 4735 },
  //       { time: '19:00', amount: 3822 },
  //       { time: '20:00', amount: 5245 },
  //       { time: '21:00', amount: 6534 },
  //       { time: '22:00', amount: 5533 },
  //       { time: '23:00', amount: 5044 },
  //     ],
  //   },
  //   ripple: {
  //     yearlyData: [
  //       { month: 'Jan', amount: 7600 },
  //       { month: 'Feb', amount: 6200 },
  //       { month: 'Mar', amount: 6800 },
  //       { month: 'Apr', amount: 5000 },
  //       { month: 'May', amount: 4200 },
  //       { month: 'Jun', amount: 5600 },
  //       { month: 'Jul', amount: 6800 },
  //       { month: 'Aug', amount: 8100 },
  //       { month: 'Sep', amount: 5700 },
  //       { month: 'Oct', amount: 4500 },
  //       { month: 'Nov', amount: 3700 },
  //       { month: 'Dec', amount: 4700 },
  //     ],
  //     monthlyData: [
  //       { date: '1', amount: 4300 },
  //       { date: '2', amount: 3600 },
  //       { date: '3', amount: 4500 },
  //       { date: '4', amount: 5200 },
  //       { date: '5', amount: 4800 },
  //       { date: '6', amount: 5600 },
  //       { date: '7', amount: 6700 },
  //       { date: '8', amount: 5400 },
  //       { date: '9', amount: 5000 },
  //       { date: '10', amount: 6300 },
  //       { date: '11', amount: 6700 },
  //       { date: '12', amount: 7800 },
  //       { date: '13', amount: 7300 },
  //       { date: '14', amount: 6200 },
  //       { date: '15', amount: 4644 },
  //       { date: '16', amount: 5043 },
  //       { date: '17', amount: 4243 },
  //       { date: '18', amount: 4635 },
  //       { date: '19', amount: 3222 },
  //       { date: '20', amount: 4145 },
  //       { date: '21', amount: 3734 },
  //       { date: '22', amount: 4233 },
  //       { date: '23', amount: 3144 },
  //       { date: '24', amount: 3543 },
  //       { date: '25', amount: 3023 },
  //       { date: '26', amount: 4023 },
  //       { date: '27', amount: 4245 },
  //       { date: '28', amount: 3145 },
  //       { date: '29', amount: 3576 },
  //       { date: '30', amount: 2345 },
  //     ],
  //     weeklyData: [
  //       { day: 'Monday', amount: 3400 },
  //       { day: 'Tuesday', amount: 4800 },
  //       { day: 'Wednesday', amount: 3700 },
  //       { day: 'Thrusday', amount: 5600 },
  //       { day: 'Friday', amount: 5100 },
  //       { day: 'Saturday', amount: 7200 },
  //       { day: 'Sunday', amount: 6300 },
  //     ],
  //     dailyData: [
  //       { time: '00:00', amount: 2600 },
  //       { time: '01:00', amount: 3300 },
  //       { time: '02:00', amount: 2800 },
  //       { time: '03:00', amount: 3200 },
  //       { time: '04:00', amount: 4000 },
  //       { time: '05:00', amount: 3400 },
  //       { time: '06:00', amount: 3100 },
  //       { time: '07:00', amount: 4500 },
  //       { time: '08:00', amount: 4900 },
  //       { time: '09:00', amount: 4200 },
  //       { time: '10:00', amount: 5300 },
  //       { time: '11:00', amount: 5900 },
  //       { time: '12:00', amount: 4800 },
  //       { time: '13:00', amount: 6800 },
  //       { time: '14:00', amount: 6100 },
  //       { time: '15:00', amount: 7844 },
  //       { time: '16:00', amount: 7143 },
  //       { time: '17:00', amount: 4043 },
  //       { time: '18:00', amount: 4835 },
  //       { time: '19:00', amount: 4322 },
  //       { time: '20:00', amount: 3645 },
  //       { time: '21:00', amount: 4934 },
  //       { time: '22:00', amount: 5933 },
  //       { time: '23:00', amount: 3944 },
  //     ],
  //   },
  // },
  // buySell: {
  //   buyData: {
  //     value: '122',
  //     price: '$7223.9',
  //     amount: '$87323.8',
  //   },
  //   sellData: {
  //     value: '34',
  //     price: '$723.9',
  //     amount: '$7632.8',
  //   },
  // },
  coinsData: {
    bitcoin: {
      price: '7289.75',
      increment: 0.8,
    },
    etherium: {
      price: '170.720',
      increment: 0.76,
    },
    liteCoin: {
      price: '65.1200',
      increment: -0.4,
    },
    ripple: {
      price: '0.2544',
      increment: 0.08,
    },
  },
  // marketGraphData: [
  //   { month: 'Jan', medium: 3000, low: 4000, high: 0, amt: 2400 },
  //   { month: 'Feb', medium: 1000, low: 4000, high: 0, amt: 2210 },
  //   { month: 'Mar', medium: 4000, low: 4000, high: 1200, amt: 2290 },
  //   { month: 'Apr', medium: 3700, low: 4000, high: 0, amt: 2000 },
  //   { month: 'May', medium: 1890, low: 4000, high: 0, amt: 2181 },
  //   { month: 'Jun', medium: 0, low: 1800, high: 0, amt: 2400 },
  //   { month: 'Jul', medium: 0, low: 3500, high: 0, amt: 2400 },
  //   { month: 'Aug', medium: 4000, low: 4000, high: 0, amt: 2400 },
  // ],
  // newsData: [
  //   {
  //     id: 1,
  //     news: 'Power Ledger’s Jemma Green Is Fighting Climate Change by Helping Trade Neighbors Energy. Binance Coin Spikes Almost 20 Percent as...',
  //     created: '16 mins',
  //     image: '/assets/images/bitcoin1.png',
  //     by: 'BTC EHTD USD',
  //   },
  //   {
  //     id: 2,
  //     news: 'Binance Coin Spikes Almost 20 Percent as Bitcoin and Crypto Market Take a Break After Red Wave. Bitcoin with other major coins have dropped...',
  //     created: '45 mins',
  //     image: '/assets/images/bitcoin2.png',
  //     by: 'BTC EHTD USD',
  //   },
  //   {
  //     id: 3,
  //     news: 'Power Ledger’s Jemma Green Is Fighting Climate Change by Helping Trade Neighbors Energy. Binance Coin Spikes Almost 20 Percent as...',
  //     created: '1 Hrs',
  //     image: '/assets/images/bitcoin3.png',
  //     by: 'BTC EHTD USD',
  //   },
  // ],
  popularCoins: [
    {
      id: 1,
      name: 'Bitcoin',
      shortName: 'BTC',
      marketCap: '129,820,932',
      volume: '25,111,773',
      h: '2.50',
      image: '/assets/images/bitcoin.svg',
      color: orange[600],
    },
    {
      id: 2,
      name: 'Ethereum',
      shortName: 'ETH',
      marketCap: '24,909,820',
      volume: '12,344,434',
      h: '0.45',
      image: '/assets/images/etherium.svg',
      color: 'black',
    },
    {
      id: 3,
      name: 'Litecoin',
      shortName: 'LTC',
      marketCap: '137,334,223',
      volume: '43,434,213',
      h: '3.43',
      image: '/assets/images/litcoin.svg',
      color: blue[400],
    },
    {
      id: 4,
      name: 'Monero',
      shortName: 'XMR',
      marketCap: '21,445,237',
      volume: '32,324,655',
      h: '0.93',
      image: '/assets/images/bitcoin.svg',
      color: orange[500],
    },
    {
      id: 5,
      name: 'Dashcoin',
      shortName: 'DASH',
      marketCap: '124,674,765',
      volume: '94,342,323',
      h: '.30',
      image: '/assets/images/bitcoin.svg',
      color: blue[600],
    },
  ],
  totalBalanceData: {
    balance: '33692.00',
    coins: [
      {id: 32423, name: 'Bitcoin', value: 9.654},
      {id: 3333, name: 'Monero', value: 76.184},
      {id: 44334, name: 'Ripple', value: 1567.5},
      {id: 54323, name: 'Litecoin', value: 56.78},
    ],
  },
  stories: [
    {
      id: 1,
      srcImg: '/assets/images/dashboard/stories1.jpg',
      title: 'Cryptocurrency prices today on September 18: Ethereum falls 2%',
      tag: 'Forbes',
      time: '2 min ago',
    },
    {
      id: 2,
      srcImg: '/assets/images/dashboard/stories2.png',
      title:
        'Katy Perry, Nas, Jason Derulo invest big in crypto music platform Audius',
      tag: 'Moneycontrol',
      time: '1 hour ago',
    },
    {
      id: 3,
      srcImg: '/assets/images/dashboard/stories3.png',
      title: 'Major stories on Bitcoin, Coinswitch Kuber, etc',
      tag: 'Forbes',
      time: '2 hours ago',
    },
    {
      id: 4,
      srcImg: '/assets/images/dashboard/stories4.png',
      title: 'Cryptocurrency September 17: Bitcoin, Ethereum trade in the red',
      tag: 'Google',
      time: '2 hours ago',
    },
    {
      id: 5,
      srcImg: '/assets/images/dashboard/stories5.png',
      title: 'Coinswitch Kuber in first India bet at $2 billion valuation',
      tag: 'Forbes',
      time: '2 hours ago',
    },
    {
      id: 6,
      srcImg: '/assets/images/dashboard/stories3.png',
      title: 'Major stories on Bitcoin, Coinswitch Kuber, etc',
      tag: 'Forbes',
      time: '2 hours ago',
    },
    {
      id: 7,
      srcImg: '/assets/images/dashboard/stories4.png',
      title: 'Cryptocurrency September 17: Bitcoin, Ethereum trade in the red',
      tag: 'Google',
      time: '2 hours ago',
    },
    {
      id: 8,
      srcImg: '/assets/images/dashboard/stories5.png',
      title: 'Coinswitch Kuber in first India bet at $2 billion valuation',
      tag: 'Forbes',
      time: '2 hours ago',
    },
  ],
  ordersActivities: [
    {
      id: 1,
      transactionID: 'TXN73547248764',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/down-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/bitcoin-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Buy Bitcoin',
      date: '02/10/2020 11:37 PM',
      usdAmount: '4,565.75',
      amount: '+ 0.2040',
    },
    {
      id: 2,
      transactionID: 'TXN35345435345',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/down-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/ethereum-light.svg',
          title: 'Ethereum',
        },
      ],
      description: 'Buy Ethereum',
      date: '02/10/2020 10:37 PM',
      usdAmount: '2,039.39',
      amount: '+ 0.12600',
    },
    {
      id: 3,
      transactionID: 'TXN43534543543',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/up-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/bitcoin-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Sell Bitcoin',
      date: '02/10/2020 10:45 PM',
      usdAmount: '9,285.71',
      amount: '+ 0.94750',
    },
    {
      id: 4,
      transactionID: 'TXN34545646633',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/up-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/ethereum-light.svg',
          title: 'ethereum',
        },
      ],
      description: 'Sell Ethereum',
      date: '02/11/2020 10:25 PMM',
      usdAmount: '12,596.75',
      amount: '+ 1.02050',
    },
    {
      id: 5,
      transactionID: 'TXN98989897677',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/down-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/bitcoin-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Buy Bitcoin',
      date: '02/10/2020 11:37 PM',
      usdAmount: '400.00',
      amount: '+ 0.00056',
    },
    {
      id: 6,
      transactionID: 'TXN73547248764',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/up-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/ethereum-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Sell Ethereum',
      date: '02/09/2020 05:15 PM',
      usdAmount: '6,246.50',
      amount: '+ 0.02575',
    },
    {
      id: 7,
      transactionID: 'TXN73547248764',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/down-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/bitcoin-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Buy Bitcoin',
      date: '02/10/2020 11:37 PM',
      usdAmount: '4,565.75 USD',
      amount: '+ 0.2040 BTC',
    },
    {
      id: 8,
      transactionID: 'TXN73547248764',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/down-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/bitcoin-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Buy Bitcoin',
      date: '02/10/2020 11:37 PM',
      usdAmount: '4,565.75 USD',
      amount: '+ 0.2040 BTC',
    },
    {
      id: 9,
      transactionID: 'TXN73547248764',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/down-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/bitcoin-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Buy Bitcoin',
      date: '02/10/2020 11:37 PM',
      usdAmount: '4,565.75 USD',
      amount: '+ 0.2040 BTC',
    },
    {
      id: 10,
      transactionID: 'TXN73547248764',
      type: [
        {
          id: 1,
          icon: '/assets/images/dashboard/down-arrow-light.svg',
          title: 'Down',
        },
        {
          id: 2,
          icon: '/assets/images/dashboard/bitcoin-light.svg',
          title: 'Bitcoin',
        },
      ],
      description: 'Buy Bitcoin',
      date: '02/10/2020 11:37 PM',
      usdAmount: '4,565.75 USD',
      amount: '+ 0.2040 BTC',
    },
  ],
  buySell: {
    coinList: [
      {
        id: 1,
        icon: '/assets/images/dashboard/bitcoin-icon.svg',
        name: 'Bitcoin',
        shortName: 'BTC',
        coinColor: '#F04F47',
        usdPrice: 569624,
      },
      {
        id: 2,
        icon: '/assets/images/dashboard/dogecoin-icon.svg',
        name: 'Dogecoin',
        shortName: 'DOGE',
        coinColor: '#1CD1F9',
        usdPrice: 162353,
      },
      {
        id: 3,
        icon: '/assets/images/dashboard/ethereum-icon.svg',
        name: 'Ethereum',
        shortName: 'ETH',
        coinColor: '#1C67F9',
        usdPrice: 345322,
      },
      {
        id: 4,
        icon: '/assets/images/dashboard/litecoin-icon.svg',
        name: 'Litecoin',
        shortName: 'LTC',
        coinColor: '#DA1CF9',
        usdPrice: 234234,
      },
    ],
  },
  gainerLooser: [
    {
      id: 1,
      icon: '/assets/images/dashboard/gainer-looser-1.png',
      name: 'Gravitoken GRV',
      type: 'gainer',
      percentage: '+458.87%',
      amount: '$7,836,170',
    },
    {
      id: 2,
      icon: '/assets/images/dashboard/gainer-looser-2.png',
      name: 'Greenex GNX',
      type: 'looser',
      percentage: '-96.21%',
      amount: '$526,915',
    },
    {
      id: 3,
      icon: '/assets/images/dashboard/gainer-looser-3.png',
      name: 'Blockchain Exchange Alliance BXA',
      type: 'looser',
      percentage: '-74.95%',
      amount: '$77,350',
    },
    {
      id: 5,
      icon: '/assets/images/dashboard/gainer-looser-5.png',
      name: 'Bridge Oracle BRG',
      type: 'gainer',
      percentage: '+183.24%',
      amount: '$23,242,618',
    },
    {
      id: 4,
      icon: '/assets/images/dashboard/gainer-looser-4.png',
      name: 'Block Commerce Protocol BCP',
      type: 'looser',
      percentage: '-90.10%',
      amount: '$601,994',
    },
    {
      id: 6,
      icon: '/assets/images/dashboard/gainer-looser-6.png',
      name: 'Solomon Defi SLM',
      type: 'looser',
      percentage: '-74.95%',
      amount: '$77,350',
    },
    {
      id: 7,
      icon: '/assets/images/dashboard/gainer-looser-7.png',
      name: 'Metaverse Dualchain Network Architecture DNA',
      type: 'gainer',
      percentage: '+136.44%',
      amount: '$191,939',
    },
    {
      id: 8,
      icon: '/assets/images/dashboard/gainer-looser-8.png',
      name: 'Story STORY',
      type: 'gainer',
      percentage: '+105.09%',
      amount: '$83,085',
    },
  ],

  atcStatics: [
    {name: 'Jan', Buy: 15670, Sell: 27456},
    {name: 'Feb', Buy: 35767, Sell: 20123},
    {name: 'Mar', Buy: 18567, Sell: 28546},
    {name: 'Apr', Buy: 52568, Sell: 25123},
    {name: 'May', Buy: 25898, Sell: 40896},
    {name: 'Jun', Buy: 45234, Sell: 25585},
    {name: 'Jul', Buy: 30785, Sell: 40568},
    {name: 'Aug', Buy: 54568, Sell: 24458},
    {name: 'Sep', Buy: 28980, Sell: 50457},
    {name: 'Oct', Buy: 50344, Sell: 27458},
    {name: 'Nov', Buy: 25089, Sell: 54546},
    {name: 'Dec', Buy: 40780, Sell: 37345},
  ],
  cardDetails: {
    cardDetail: [
      {
        id: 1,
        title: 'Card Holder',
        name: 'Demo One',
      },
      {
        id: 2,
        title: 'Bank Name',
        name: 'HDFC First Bank',
      },
      {
        id: 3,
        title: 'Card Number',
        name: '**** **** **** 1234',
      },
      {
        id: 4,
        title: 'Valid Date',
        name: '12/21',
      },
    ],
    monthlyLimit: [
      {
        id: 1,
        value: 66,
        activeColor: '#F04F47',
        title: 'Main Limits',
        income: '$10,000',
      },
      {
        id: 2,
        value: 31,
        activeColor: '#0BBFDB',
        title: 'Seconds',
        income: '$500',
      },
      {
        id: 3,
        value: 17,
        activeColor: '#3D5AFE',
        title: 'Others',
        income: '$100',
      },
    ],
  },
  quickTransfer: {
    recentContact: [
      {
        id: 1,
        image: '/assets/images/avatar/A11.jpg',
        name: 'David Gaskin',
      },
      {
        id: 2,
        image: '/assets/images/avatar/A10.jpg',
        name: 'Jems Parcey',
      },
      {
        id: 3,
        image: '/assets/images/avatar/A8.jpg',
        name: 'Chirag Patel',
      },
      {
        id: 4,
        image: '/assets/images/avatar/A7.jpg',
        name: 'Yami Gautam',
      },
      {
        id: 5,
        image: '/assets/images/avatar/A5.jpg',
        name: 'Petrick Dang',
      },
      {
        id: 6,
        image: '/assets/images/avatar/A2.jpg',
        name: 'Jim Raput',
      },
    ],
    coinList: [
      {
        id: 1,
        icon: '/assets/images/dashboard/bitcoin-icon.svg',
        value: 569624,
        shortName: 'BTC',
      },
      {
        id: 2,
        icon: '/assets/images/dashboard/dogecoin-icon.svg',
        value: 162353,
        shortName: 'DOGE',
      },
      {
        id: 3,
        icon: '/assets/images/dashboard/ethereum-icon.svg',
        value: 345322,
        shortName: 'ETH',
      },
      {
        id: 4,
        icon: '/assets/images/dashboard/litecoin-icon.svg',
        value: 234234,
        shortName: 'LTC',
      },
    ],
  },
  // btcChartData: [
  //   {
  //     id: 1001,
  //     name: 'GBP',
  //     value: 302,
  //     color: '#4299E1',
  //   },
  //   {
  //     id: 1002,
  //     name: 'USD',
  //     value: 450,
  //     color: '#E53E3E',
  //   },
  //   {
  //     id: 1003,
  //     name: 'CNY',
  //     value: 274,
  //     color: '#38B2AC',
  //   },
  //   {
  //     id: 1004,
  //     name: 'EUR',
  //     value: 218,
  //     color: '#4C51BF',
  //   },
  // ],
};
export default cryptoData;

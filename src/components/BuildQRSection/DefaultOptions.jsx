const DefaultOptions = {

    type: 'svg',
    data: 'http://qr-code-styling.com',
    image: '/favicon.ico',
    margin: 5,
    qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q'
    },
    imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 20,
        crossOrigin: 'anonymous',
    },
    dotsOptions: {
        color: '#222222',
        gradient: {
            type: 'linear', // 'radial'
            rotation: 90,
            colorStops: [{ offset: 0, color: '#0077ff' }, { offset: 1, color: '#058001' }]
        },
        type: 'rounded'
    },
    backgroundOptions: {
        //color: '#5FD4F3',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
    },
    cornersSquareOptions: {
        color: '#222222',
        type: 'extra-rounded',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
    },
    cornersDotOptions: {
        color: '#222222',
        type: 'dot',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
    }
}

export default DefaultOptions;
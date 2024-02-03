import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean
};

function UnitSkill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
      }}
      transition={{
        duration: 1
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAesz
      ///8AcckAdMoAe8zF2/AAdsuPueMAeMsAb8kAcsn5/f4AdcrA2vAAfs30+v0khdCVv+UxitJWm9fg7vhpo9rP4v
      O10ezY6Pbn8vqIteGgxeipy+pCktR5rt9goNk6j9OCseCjyOi61e4wtFZqAAAGBklEQVR4nO2ca3eiOhSGMVS6E
      xW831Fb//9/PGA7PVaSEMxOpGu9z6dZMxPgkVx3dkgSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCHvnnFPX1wu08qREr5tCKv/iyFGocVJVUj0uyB5l3zR35dpi6TCpXab5a
      KbDEb7orBN6NiOTzuy+qvea3u7zkfFDdGjwy6cStTjNbCci+VnYba6xbXlVCB3mRlyMpOGu8k5hvbL3TIwzhyGxY
      GQxLTSVvZY2av4702pPTgUvok+V8jlbyGI62huhTtRWuGmh7uLxjKD+fyxXz8Bw3lZ5crlMyNMYKhPHa7xIJXk
      Ra8hoOGoXTqY+65sA7/wQ3VqfMlipyzuwlt+NRotOQc+0MbyuUzF7kaZ0a9M0z3z13lpNgMszOv4G9Doq4T+H9
      M2epptmL1ezBUnfvRf2zZXmJQQ1KOk7UmG7ZBMahh2n2k+GK04utqghqKtel/TT7KPM/nq4O2q13njNMams/eLe
      juv9xbCszuJs6UGPw2uRjfAjuZkpdh458/eNdQlJpRqe75htJS5P7HN/XTq3sDkg+1aDvlGyna7d+0hpZQzC+Ufs
      p9eiivLvdDyj7AItiMp6G+GQ4bncj48poXmHgbyp2u+KL5jn5m5yGiGFZ8DXUTGm0gR15vF34LEYmy4tsOdYba0p
      Tu6jEw8gtMfA0p05XeaBsaTY/EHaBxwdOQtIb60hQq5G3Hty/V1dKJa+kohDA0h/1fgW9fql1ZzF9SHQ0EGQ+vfa
      qmvrV0qys+KMPtFXbGdzy8ag2LvD+Knoam/aZiHnfyacHT0Ly6jruAsOBpSLnJcLAt++HoaWiJYlRXufTB0dfQHol
      aL2T0tcQjvoZt0cTlKVgGhusTehomamY1rLrVWS5e6eht6BLV38xf2CC9Dd12ZqoG+ao5gL9hIrRz00e25xc5MhjS
      RXeJJstVwNQ2y+P5G7Z3Nj+O5z8Xp/lGNsP2Bl4w0WExJKVfROmY5JHn5CyGnRQH73FfI49hQqllfvrIMurSiskwI
      WHLLH0k5tKKy7BT7l7VGtNoinyGiZg7Df1fLFmTomwwGlY11XVgrCimkYZ/TsNq7J86j4zMqW1meA0TkgvncWPHny
      ysfSRew9rx7Jrnto4S/Wc3TJJMnh3f4z7GuBjAsHYs3dojX2qbmSCGt7MlLonRMeppIMPbfuh7e8qbJqeBm2CGtz
      Neq7YGyXKjlscIZ5jcGmTLjDx8SwxreGuQ1sNQs+AR49CGN0dLx7oMXk3DG9aTgNI8CQheTWMY1o7GoOpH6BybOI
      bVnHxuGDoMyTd8xDJMsqk++r8MPehHM0zG+mMfo9Bz03iG39mJDUIvE/kMWx/UEP0v/4ghifZuX2g7m/OfMKQ6fN
      Ga66VPL1oFjtewGI5vaTWt0xN9VsOp/4YkT1/V79BSSm/Y+3dI4vJT+c72nl9/UPHcc0P1dh/NL21TMEq1Y36/+9
      JM/D5UNLIdtc/0Q37oqbePIcnzYxx/dDGv96R+wR96gfi8YbXu0/UcC1NRoT1D1uN5KWWGYJp+A7TqcPX/fdLXeS
      ldjIlC62kzB2osTJ+V2Pd1fUiJJVR4LaX6/5NSREKcjBtvwbPen66lY2tS4u6weBM1SohkcTT/Grsex2lk2879bj
      3cbK5r+7bpLPjWhUdfOm0xdCL8JqLHePj0Me47IpzM8BnxZeuHr1qJsPnkNadJO6QmaPmMcLjGa17q2xSLGAnSfj
      NvQ/zMlSiHh3xPBfl8NyXKJrf/+vD5t3iIc0zRe42fdsmEuucY6Rymf5yGMvcsoTtmsQ6a8kSiuguuoh3CZIkmpn
      nHsX87jXdYiCkiLMsOScIj5m+3tDwbV1TfORFq8ElRT3vx7cxksnRIEy5msT88oP9I0LP5pXSy96vXs4p+ko3eJk
      2Gz+aA0Fikq6M+LWH7uRCvOTSjRBOPhkKZElSeZsfrertdVmy36+vho6RXn0NkhShNVf3LyYo6WKPGcb/NDgAAAA
      AAAAAA/AX+A5EXWEIlpMiKAAAAAElFTkSuQmCC'
      className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
      filter group-hover:grayscale duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-70 transition duration-100 ease-in-out
      group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
};

export default UnitSkill;
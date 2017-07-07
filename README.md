# vm-geo

这个插件是用于提供地理位置信息(经纬度信息)的插件, 使用在vue框架下, 可以使用的模式如下: 

- H5: HTML5模式
- aMap: 高德地图模式(阿里地图)
- bMap: 百度地图
- qMap: 腾讯地图

使用的时候指定模式, 设置使用的key即可.

## 安装

```
npm install vm-geo
```

## 引入

### 通过`script标签`引入
```
  <script src="http://vuejs.org/js/vue.min.js"></script>
  <script type='text/javascript' src='./vm-geo.min.js'></script>
```

### 通过`import/require`引入

```
import vmGeo from 'vm-geo'
Vue.use(vmGeo, {...})
```


## options参数


name               | type    | default                               | description
-------------------|---------|---------------------------------------|---------------------------------------------------------------------------------
enableHighAccuracy | Boolean | true                                  | 是否要求高精度地理位置信息
maximumAge         | Number  | 10000                                 | 设置缓存时间为1s，1s后重新获取地理位置信息
timeout            | Number  | 10000                                  | 10s未返回信息则返回错误
fallBack           | String  | 'aMap'                                | 条件允许优先使用原生获取, 如果在IOS下是使用的是HTTP获取, 则使用备选, 这里是aMap
qMap               | Object  | {}                                    | 腾讯地图配置
qMap.key           | String  | 'OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77' | key配置
qMap.name          | String  | 'qqMapName'                           | 默认值
bMap               | Object  | {}                                    | 百度地图配置
bMap.key           | String  | ''                                    | key配置
aMap               | Object  | {}                                    | 高德配置
aMap.key           | String  | ''                                    | key配置



## 使用

```
    let vm = Vue.prototype
    Vue.use(vmGeo, {
      enableHighAccuracy: true, // 是否要求高精度地理位置信息
      maximumAge: 10000,         // 设置缓存时间为1s，1s后重新获取地理位置信息
      timeout: 15000,            // 15s未返回信息则返回错误
      fallBack: 'aMap',         // 条件允许优先使用原生获取, 如果在IOS下是使用的是HTTP获取, 则使用备选, 这里是aMap
      qMap: {
        key: 'OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77', // official example app key, please use geo.register() to replace
        name: 'qqMapName'
      },
      bMap: {
        key: 'yFKaMEQnAYc1hA0AKaNyHGd4HTQgTNvO'
      },
      aMap: {
        key: '8d1ba642a3a3046d1ee087e0f8b490a2'
      }
    })
    vm.$geo.getCurrentPosition('qMap').then(function (data) {
      console.log('qMap 返回数据:')
      console.log(data)
    }, function (err) {
      console.error('qMap err返回数据:')
      console.error(err)
    })

    vm.$geo.getCurrentPosition('aMap').then(function (data) {
      console.log('aMap 返回数据:')
      console.log(data)
    }, function (err) {
      console.error('aMap err返回数据:')
      console.error(err)
    })

    vm.$geo.getCurrentPosition('bMap').then(function (data) {
      console.log('bMap 返回数据:')
      console.log(data)
    }, function (err) {
      console.error('bMap err返回数据:')
      console.error(err)
    })

    vm.$geo.getCurrentPosition('h5').then(function (data) {
      console.log('h5 返回数据:')
      console.log(data)
    }, function (err) {
      console.error('h5 err返回数据:')
      console.error(err)
    })
```


## 方法
 
#### getCurrentPosition(type)
 
获取当前地理坐标, 默认使用h5模式(type), 也可以是: h5/qMap/bMap/aMap, 只能是这几个. 方法返回promise
 
#### watchPosition()
 
订阅模式, 当位置坐标发生变化, 则触发回调. 使用此方法前需要先执行getCurrentPosition(). 方法返回订阅id
 
```
  this.$geo.getCurrentPosition().then(() => {
     this.h5Timer = this.$geo.watchPosition((position) => {
        this.h5Geo = position
     })
  })
 
```
 
#### clearWatch(id)
 
取消订阅
 


## LICENSE

 MIT
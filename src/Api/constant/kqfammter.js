// 审批
export default {
  // 温度类型
  temperatureType: [
    {
      type: 'CW',
      value: '常温'
    },
    {
      type: 'LC',
      value: '冷藏'
    },
    {
      type: 'HW',
      value: '恒温'
    }
  ],
  // 审批状态
  bearingType: [
    {
      type: 'ZX',
      value: '重型'
    },
    {
      type: 'QX',
      value: '轻型'
    },
    {
      type: 'BX',
      value: '中型'
    }
  ],
  cache: [
    {
      type: 'RKHCQ',
      value: '入库缓存区'
    },
    {
      type: 'CKHCQ',
      value: '出库缓存区'
    },
    {
      type: 'CCQ',
      value: '存储区'
    },
    {
      type: 'FJQ',
      value: '分拣区'
    },
    {
      type: 'ZJQ',
      value: '质检区'
    }
  ],
  disabled: [
    {
      type: 0,
      value: '禁用'
    },
    {
      type: 1,
      value: '启用'
    }
  ]
}

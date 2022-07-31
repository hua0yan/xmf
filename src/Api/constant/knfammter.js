// 员工
export default {
  // 聘用形式
  fammterType: [
    {
      status: 1,
      value: '新建'
    },
    {
      status: 2,
      value: '一盘中'
    },
    {
      status: 3,
      value: '一盘完成'
    },
    {
      status: 4,
      value: '复盘中'
    },
    {
      status: 5,
      value: '复盘完成'
    },
    {
      status: 6,
      value: '已取消'
    }
  ],
  reason: [
    {
      status: 'GH',
      value: '规划'
    },
    {
      status: 'HZ',
      value: '货主'
    },
    {
      status: 'CY',
      value: '差异'
    }
  ],
  dimension: [
    {
      status: 'KW',
      value: '库位'
    },
    {
      status: 'HP',
      value: '货品'
    }
  ],
  type: [
    {
      status: 'SJPD',
      value: '随机盘点'
    },
    {
      status: 'JHPD',
      value: '计划盘点'
    }
  ]
}

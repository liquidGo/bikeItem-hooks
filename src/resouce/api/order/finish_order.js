import Mock from 'mockjs';
Mock.setup({ timeout: 50 });
Mock.mock('finish_order.php', 'post', function (option) {
  console.log('后端接收到的结束数据',JSON.parse(option.body).data.list)
  return Mock.mock(
    {
      "code": '200',
      "result": 'Ok'
    }
  )
})





export const sku = {
  tree: [
          {
          k: '商品类型', // skuKeyName：规格类目名称
          v: [
            {
              id: '1210', // skuValueId：规格值 id
              name: '红色卫衣', // skuValueName：规格值名称
              imgUrl: 'https://img.yzcdn.cn/2.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
              previewImgUrl: 'https://img.yzcdn.cn/2p.jpg', // 用于预览显示的规格类目图片
            },
            {
              id: '1215',
              name: '天蓝色',
              imgUrl: 'https://img.yzcdn.cn/2.jpg',
              previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
            },
            {
              id: '1216',
              name: '黑色',
              imgUrl: 'https://img.yzcdn.cn/2.jpg',
              previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
            }
          ],
          k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: '尺寸', // skuKeyName：规格类目名称
            v: [
              {
                id: '1111', // skuValueId：规格值 id
                name: 'S', // skuValueName：规格值名称
              },
              {
                id: '1112',
                name: 'M',
              },
              {
                id: '1113',
                name: 'L',
              }
            ],
            k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
        {
        id: 2259, // skuId，下单时后端需要
        price: 9900, // 价格（单位分）
        s1: '1210', // 规格类目 k_s 为 s1 的对应规格值 id
        s2: '1111',
        stock_num: 584 // 当前 sku 组合对应的库存
        },
        {
        id: 2260, // skuId，下单时后端需要
        price: 9900, // 价格（单位分）
        s1: '1210', // 规格类目 k_s 为 s1 的对应规格值 id
        s2: '1112',
        stock_num: 110 // 当前 sku 组合对应的库存
        },
        {
          id: 2261, // skuId，下单时后端需要
          price: 9900, // 价格（单位分）
          s1: '1210', // 规格类目 k_s 为 s1 的对应规格值 id
          s2: '1113',
          stock_num: 110 // 当前 sku 组合对应的库存
        },
        {
          id: 2262, // skuId，下单时后端需要
          price: 8600, // 价格（单位分）
          s1: '1215', // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '1111',
          stock_num: 567 // 当前 sku 组合对应的库存
        },
        {
          id: 2263, // skuId，下单时后端需要
          price: 8600, // 价格（单位分）
          s1: '1215', // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '1112',
          stock_num: 567 // 当前 sku 组合对应的库存
        },
        {
          id: 2264, // skuId，下单时后端需要
          price: 8600, // 价格（单位分）
          s1: '1215', // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '1113',
          stock_num: 567 // 当前 sku 组合对应的库存
        },
        {
          id: 2265, // skuId，下单时后端需要
          price: 8600, // 价格（单位分）
          s1: '1216', // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '1111',
          stock_num: 567 // 当前 sku 组合对应的库存
        },
        {
          id: 2266, // skuId，下单时后端需要
          price: 8600, // 价格（单位分）
          s1: '1216', // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '1112',
          stock_num: 567 // 当前 sku 组合对应的库存
        },
        {
          id: 2267, // skuId，下单时后端需要
          price: 8600, // 价格（单位分）
          s1: '1216', // 规格类目 k_s 为 s2 的对应规格值 id
          s2: '1113',
          stock_num: 567 // 当前 sku 组合对应的库存
        }
        ],
        price: '69.00', // 默认价格（单位元）
        stock_num: 8685, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
                  }

export const messageConfig = {}
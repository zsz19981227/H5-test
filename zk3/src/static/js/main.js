require.config({
    paths: {
        'jquery': './lib/jquery-1.7.2.min',
        'swiper': './lib/swiper-3.4.2.min',
        'zk': './comment/zk3'
    }
})

require(['zk'], function(zkThree) {
    zkThree.ks()
})
require.config({
    paths: {
        'jquery': './lib/jquery-1.7.2.min',
        'code': "./comment/Code",
        'hand': './lib/handlebars-v4.0.11'
    }
})
require(['code'], function(code) {
    code.ajaxCode()
})
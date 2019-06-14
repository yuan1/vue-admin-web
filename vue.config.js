module.exports = {
    publicPath: '',
    assetsDir: 'assets',
    outputDir:'admin',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://148.70.15.97:9527',
                ws: true,
                changeOrigin: true
            }
        }
    }
};

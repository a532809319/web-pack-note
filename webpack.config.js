module.exports={
entry:'./entry.js',
output:{
	path:__dirname,//相同根目录下面
	filename:'bundle.js'
},
devtool:'source-map',
module:{
	loaders:[
	{test:/\.js$/, exclude: /node_modules/, loader:'react-hot!babel'},
	{test:/\.css$/,loader:'style!css!'}
	]
}
};
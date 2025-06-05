import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  build: {
    target: 'modules',
    // 打包文件目录
    outDir: 'es',
    // 压缩
    minify: false,
    // css分离
    // cssCodeSplit: true,
    rollupOptions: {
      // 只排除不需要打包的依赖
      external: ['ant-design-vue', 'lottie-web-vue', 'lodash'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          // 不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          // 禁用 preserveModules，让 Vue 组件能够被正确编译和打包
          preserveModules: false,
          dir: 'lib',
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      // 使用正确的属性名
      tsconfigPath: './tsconfig.json',
    }),
    // 使用正确的属性名
    dts({
      outDir: 'lib',
      tsconfigPath: './tsconfig.json',
    }),
  ],
});

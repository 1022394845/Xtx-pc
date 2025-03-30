import ImageViewer from './ImageViewer.vue'
import GoodsItem from './GoodsItem.vue'
import XtxSku from './XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('ImageViewer', ImageViewer),
      app.component('GoodsItem', GoodsItem),
      app.component('XtxSku', XtxSku)
  }
}

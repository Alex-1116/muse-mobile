const layout = () => import('layouts/MyLayout.vue')
const notloginlayout = () => import('layouts/notloginMyLayout.vue')

const loginRouter = {
    path: '/login',
    name: 'login',
    component: () => import('pages/login')
}

const HisTbk = {
    path: '/HisTbk',
    name: 'HisTbk',
    component: () => import('pages/his/HisTbk')
}


const Error404 = {
    path: '/Error404',
    name: 'Error404',
    component: () => import('pages/Error404')
};

const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: layout,
    children: [
        {
            path: '/Index',
            name: 'Index',
            component: () => import('pages/Index.vue'),
        },
    ]
};

const notloginRouter = {
    path: '/Hisappear',
    name: 'Hisappear',
    component: notloginlayout,
    children: [
        {
            path: '',
            name: 'IndexHisappear',
            component: () => import('pages/his/Hisappear.vue'),
        },
        {
            path: '/HiseidtIndex/:item',
            name: 'HiseidtIndex',
            component: () => import('pages/eidtIndex')
        },
        {
            path: '/Hisxxsbck/:item',
            name: 'Hisxxsbck',
            component: () => import('pages/xxsbck')
        },
        {
            path: '/Hismessage',
            name: 'Hismessage',
            component: () => import('pages/message.vue'),
        }
    ]
};

export const appRoutes = [
    {
        path: '/cms',
        name: 'CMS',
        component: layout,
        children: [
            // { path: '', name:'Index', component: () => import('pages/Index.vue') },
            // 信息审核
            // { path: '/check', name:'check', component: () => import('pages/check.vue') },
            // // 召回申请
            // { path: '/recall', name:'recall', component: () => import('pages/recall.vue') },
            // // 上报信息
            // { path: '/appear', name:'appear', component: () => import('pages/appear.vue') },
            // // 信息上报--查看
            // 信息审核（疾控）
            { path: '/check_jk', name: 'check_jk', component: () => import('pages/check_jk.vue') },
            { path: '/xxsbck/:item', name: 'xxsbck', component: () => import('pages/xxsbck.vue') },
            // //召回申请--查看
            { path: '/zhsqck/:item', name: 'zhsqck', component: () => import('pages/zhsqck.vue') },
            // //信息审核--查看
            { path: '/xxshck/:item', name: 'xxshck', component: () => import('pages/xxshck.vue') },
            // // 信息管理--查看
            { path: '/blxxck/:item', name: 'blxxck', component: () => import('pages/blxxck.vue') },
            // // 信息管理
            // { path: '/message', name:'message', component: () => import('pages/message.vue') },
            // 传染病报告卡
            { path: '/crb_index', name: 'crb_index', component: () => import('pages/crb/crb_index.vue') },
            // 传染病审核
            { path: '/crb_check', name: 'crb_check', component: () => import('pages/crb/crb_check.vue') },
            // 传染病上报
            { path: '/crb_appear', name: 'crb_appear', component: () => import('pages/crb/crb_appear.vue') },
            // 报卡浏览审核
            { path: '/crb_examine', name: 'crb_examine', component: () => import('pages/crb/crb_examine.vue') },
            // 冠心病发病/脑卒中报告卡
            { path: '/gxb_bgk', name: 'gxb_bgk', component: () => import('pages/gxb/gxb_bgk.vue') },
            // 居民年肿瘤病例报告卡
            { path: '/gxb_zl', name: 'gxb_zl', component: () => import('pages/gxb/gxb_zl.vue') },
            // 全国伤害检测报告卡
            { path: '/gxb_sh', name: 'gxb_sh', component: () => import('pages/gxb/gxb_sh.vue') },
            // 修改食源性疾病填报卡
            { path: '/eidtIndex/:item', name: 'eidtIndex', component: () => import('pages/eidtIndex.vue') },
            // HIS-食源性疾病诊断名称/编码维护
            { path: '/syxjb', name: 'syxjb', component: () => import('pages/his/syxjb.vue') },
            // 数据管理-慢性病综合查询-冠心病/脑卒中报告卡
            { path: '/sjgl_gxb', name: 'sjgl_gxb', component: () => import('pages/sjgl/sjgl_gxb.vue') },
            // 数据管理-慢性病综合查询-伤害报告卡
            { path: '/sjgl_shbgk', name: 'sjgl_shbgk', component: () => import('pages/sjgl/sjgl_shbgk.vue') },
            // 数据管理-慢性病综合查询-肿瘤报告卡
            { path: '/sjgl_zl', name: 'sjgl_zl', component: () => import('pages/sjgl/sjgl_zl.vue') },
            // 报告卡查重-冠心病/脑卒中报告卡查重
            { path: '/bgkcc_gxb', name: 'bgkcc_gxb', component: () => import('pages/bgkcc/bgkcc_gxb.vue') },
            // 报告卡查重-冠心病/脑卒中报告卡查重-查看
            { path: '/bgkcc_gxbck', name: 'bgkcc_gxbck', component: () => import('pages/bgkcc/bgkcc_gxbck.vue') },
            // 报告卡查重-伤害检测报告卡查重
            { path: '/bgkcc_shjc', name: 'bgkcc_shjc', component: () => import('pages/bgkcc/bgkcc_shjc.vue') },
            // 报告卡查重-伤害检测报告卡查重-查看
            { path: '/bgkcc_shjcck', name: 'bgkcc_shjcck', component: () => import('pages/bgkcc/bgkcc_shjcck.vue') },
            // 报告卡查重-肿瘤报告卡查看
            { path: '/bgkcc_zl', name: 'bgkcc_zl', component: () => import('pages/bgkcc/bgkcc_zl.vue') },
            // 报告卡查重-肿瘤报告卡查看-查看
            { path: '/bgkcc_zlck', name: 'bgkcc_zlck', component: () => import('pages/bgkcc/bgkcc_zlck.vue') },
            // 慢性病上报
            { path: '/gxb_appear', name: 'gxb_appear', component: () => import('pages/gxb/gxb_appear.vue') },
            // 慢性病审核
            { path: '/gxb_check', name: 'gxb_check', component: () => import('pages/gxb/gxb_check.vue') },
            // 慢性病查看
            { path: '/mxbck', name: 'mxbck', component: () => import('pages/gxb/mxbck.vue') },

        ]
    }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export const routes = [
    loginRouter,
    otherRouter,
    // ...appRoutes,
    Error404,
    HisTbk,
    notloginRouter
]

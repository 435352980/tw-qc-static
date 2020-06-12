const cnLocal = {
  common: {
    panel: '面板',
    bag: '背包',
    store: '仓库',
    selectLanguage: '选择语言',
    loading: '加载中...',
    split: '拆解',
    upgrade: '进阶',
    notFound: '未检索到数据',
    ok: '确认',
    cancel: '取消',
    copy: '复制',
    copyImageSuccess: '图片已复制至剪切板',
    calcInfo: '计算明细',
    sum: '总计',
    save: '保存',
    reset: '重置',
    optional: '可选',
    multiWays: '多来源',
    chooseFeature: '选择特性',
    addedToTarget: '已添加至目标',
    addedToCache: '已添加至缓存',
    unit: '单位',
    qualities: [
      '',
      '[普通]',
      '[魔力]',
      '[罕见]',
      '[极其罕见]',
      '[天绝史诗]',
      '[传奇至宝]',
      '[神话传说]',
      '[禁断圣物]',
      '[冥灵传世]',
    ],
    goodFields: {
      hp: 'hp',
      mp: 'mp',
      atk: '攻',
      def: '防',
      str: '力',
      agi: '敏',
      int: '智',
      mainAttrInc: '主属',
      atkSpeed: '攻速',
      moveSpeed: '移速',
      abilityDamageInc: '技伤',
      sufferDamageDec: '减伤',
      magicDefInc: '魔抗',
      hpInc: '回血',
      stillDamageInc: '续伤',
      atkDamageInc: '攻伤',
      mpInc: '回蓝',
      hpRegenInc: '恢复',
      sufferCureInc: '治疗',
      missInc: '闪避',
      punchAsChanceInc: '倍击',
      punchChanceInc: '暴击',
      resurrectionTimeDec: '读秒',
      expInc: 'exp',
      iceDamageInc: '冰/水',
      fireDamageInc: '火',
      windAttrInc: '风',
      natureAttrInc: '自然',
    },
    stage: '阶段',
    stages: ['', '[野外]', '[粉末]', '[小四]', '[四大]', '[主龙]', '[白怨火]', '[君主]'],
    otherType: '[其他]',
    all: '全部',
    categories: {
      Equip: '装备',
      Weapon: '武器',
      Helm: '头盔',
      Armor: '衣服',
      Ring: '饰品',
      Wings: '翅膀',
      Material: '材料',
      Icon: '徽章',
      Token: '结晶',
      Summoner: '召唤器',
      Quest: '任务',
    },
    unitProps: {
      uhpr: '生命回复',
      uhpm: '生命最大值',
      uabi: '普通',
      utub: '提示工具 - 扩展',
      utip: '提示工具 - 基础',
      udty: '护甲类型',
      umvs: '基础速度',
      ucol: '碰撞体积',
      unam: '名字',
      usca: '模型缩放',
      ubld: '建造时间',
      urtm: '修理时间',
      ugor: '修理黄金消耗',
      ulur: '修理木材消耗',
      usid: '视野范围(白天)',
      util: '地形设置',
      umvt: '类型',
      utyp: '单位类别',
      usin: '视野范围(夜晚)',
      umvh: '高度',
      umdl: '模型文件',
      upgr: '使用科技',
      usnd: '单位声音设置',
      uico: '图标 - 游戏界面',
      ushw: '阴影图像 - 宽度',
      ushh: '阴影图像 - 高度',
      ushx: '阴影图像 - X轴偏移',
      ushy: '阴影图像 - Y轴偏移',
      ussc: '选择缩放',
      uclb: '颜色值(蓝)',
      uclg: '颜色值(绿)',
      uclr: '颜色值(红)',
      uhab: '英雄',
      uint: '英雄 - 初始智力',
      ubba: '黄金奖励 - 基础值',
      ubsi: '黄金奖励 - 骰子面数',
      ubdi: '黄金奖励 - 骰子数量',
      ustp: '英雄 - 每等级提升力量',
      uinp: '英雄 - 每等级提升智力',
      uagp: '英雄 - 每等级提升敏捷',
      uagi: '英雄 - 初始敏捷',
      ustr: '英雄 - 初始力量',
      uaen: '允许攻击模式',
      urq2: '需求 - 等级 3',
      urq1: '需求 - 等级 2',
      urqc: '需求 -使用等级数',
      uawt: '提示工具 -唤醒',
      utpr: '提示工具 -重生',
      upru: '称谓数量',
      uhot: '热键',
      upro: '称谓',
      ussi: '图标 - 计分屏',
      ureq: '需求',
      usei: '售出物品',
      ucam: '分类 - 战役',
      ides: '说明',
      ulfo: '循环淡出率',
      ulfi: '循环淡入率',
      umsl: '移动',
      ulev: '等级',
      uspa: '特殊效果',
      ufoo: '占用人口',
      ucpt: '动画 - 魔法施放点',
      ucbs: '动画 - 魔法施放回复',
      udea: '死亡类型',
      ushu: '阴影图像(单位)',
      ua1t: '攻击 1 - 攻击类型',
      ua1b: '攻击 1 - 基础伤害',
      ua1c: '攻击 1 - 攻击间隔',
      udp1: '攻击 1 - 动画伤害点',
      ubs1: '攻击 1 - 动画回复点',
      ua1s: '攻击 1 - 伤害骰子面数',
      ucs1: '攻击 1 - 武器声音',
      ua1w: '攻击 1 - 武器类型',
      ua1m: '攻击 1 - 投射物图像',
      umh1: '攻击 1 - 射弹自导允许',
      ua1r: '攻击 1 - 攻击范围',
      ua1g: '攻击 1 - 目标允许',
      ulpz: '射弹偏移 - Z',
      uacq: '主动攻击范围',
      urb1: '攻击 1 - 攻击范围缓冲',
      ua1z: '攻击 1 - 射弹速率',
      urac: '种族',
      uma1: '攻击 1 - 射弹弧度',
      ua1p: '攻击 1 - 范围影响目标',
      ua1q: '攻击 1 - 小伤害范围',
      ua1f: '攻击 1 - 全伤害范围',
      ua1h: '攻击 1 - 中伤害范围',
      uhrt: '生命回复类型',
      uhd1: '攻击 1 - 中伤害参数',
      uqd1: '攻击 1 - 小伤害参数',
      upri: '编队优先权',
      ufle: '可以逃跑',
      uimz: '射弹碰撞偏移 - Z',
      uaap: '要求动画名 - 附加动画',
      udtm: '死亡时间(秒)',
      uarm: '装甲类型',
      urun: '动画 - 跑步速度',
      uwal: '动画 - 行走速度',
      ubui: '可建造建筑',
      ua1d: '攻击 1 - 伤害骰子数量',
      ufor: '队形排列',
      utar: '作为目标类型',
      udef: '基础护甲',
      umvf: '最小高度',
      uslz: '选择圈高度',
      usma: '最大库存量',
      umpr: '魔法回复',
      ugol: '黄金消耗',
      umpm: '魔法最大值',
      ulpx: '射弹偏移 - X',
      ulpy: '射弹偏移 - Y',
      uamn: '最小攻击范围',
      uerd: '高度变化 - 采样范围',
      ucut: '魔法升级说明',
      ucun: '魔法升级名字',
      udaa: '默认主动技能',
      umpi: '魔法初始数量',
      ucua: '魔法升级图标',
      uver: '模型文件 - 版本',
      utcc: '队伍颜色 - 允许自定义',
      umxp: 'X轴最大旋转角度(弧度)',
      umxr: 'Y轴最大旋转角度(弧度)',
      utco: '队伍颜色',
      udep: '从属等价物',
      upra: '英雄 - 主要属性',
      umvr: '转身速度',
      umis: '最小速度',
      uspe: '分类 - 特殊',
      uani: '要求动画名',
      ulum: '木材消耗',
      usrg: '雇佣时间间隔',
      usst: '雇佣开始时间',
      uscb: '缩放投射物',
      uhos: '可作为中立敌对显示',
      usle: '允许睡眠',
      uhhd: '英雄 - 隐藏英雄死亡信息',
      udro: '可设置死亡掉落物品',
      upoi: '单位附加值',
      ucar: '运输尺寸',
      uhom: '隐藏小地图显示',
      ushr: '深水区有阴影',
      uble: '动画 - 混合时间(秒)',
      uprw: '动画 - 转向角度',
      uwu1: '攻击 1 - 显示UI',
      ushb: '阴影图像(建筑)',
      uubs: '建筑地面纹理',
      upat: '路径纹理',
      umas: '最大速度',
      udup: '防御升级奖励',
    },
  },
  views: {
    header: {
      appName: '装备速查',
      items: '物品信息',
      heroes: '英雄信息',
      bosses: 'BOSS掉落',
      repChats: '聊天记录',
      activities: '活动',
      setWar3Path: '设置War3目录',
      openWar3Path: '打开War3目录',
      setExportPath: '设置导出目录',
      openExportPath: '打开导出目录',
      resetPath: '右击重置',
      resetDialog: {
        title: '重置确认',
        message: {
          war3: '确认重置War3目录吗?',
          export: '确认重置导出目录吗?',
        },
      },
      team: {
        add: '新建分组',
        name: '分组名称',
        select: '选择分组',
        notice: '请先选择分组后再查看!',
        view: '查看分组',
      },
      save: {
        select: '选择存档',
        notice: '请先选择存档后再查看!',
        view: '查看存档',
      },
      listenOn: '通知 【开启】录像截图保存',
      listenOff: '通知 【关闭】录像截图保存',
      scale: '缩放',
      about: '关于速查',
      releaseUrl: '更新地址',
      h5: '速查H5',
      qq: '交流反馈群',
      ps: '打广告属于弟弟行为，无奈度娘疯狂吞链......',
    },
    good: {
      operations: '操作',
      image: '图片',
      heroLimit: '佩戴限定',
      level: '等级',
      quality: '品阶(明细)',
      limit: '限定',
      exclusives: '专属',
      overView: '特性',
      calc: '阶段/计算',
      have: '有',
      searchPlaceholder: '输入名称进行检索',
      dropFrom: '获取方式(掉落)',
      buildFrom: '获取方式(合成)',
      makeTo: '可合成项',
      unitAttr: '属性一览',
      bossDrop: '掉落一览',
    },
    calc: {
      saveName: '计算明细',
      num: '数量',
      count: '总计',
      requireCount: '需求量',
      requireChooseCount: '合计需求',
      necessaryItem: '必需项',
      unNecessaryItem: '杂项',
      chooseItem: '可选项',
      alreadyHave: '已持有',
    },
    mdx: {
      selectAnimation: '请选择动画',
      selectWing: '请选择翅膀',
      selectHelmet: '请选择头盔',
      selectRing: '请选择饰品',
    },
    targetPanel: {
      clearCache: '清除缓存',
      deleteTarget: '删除目标',
      getDeleteTargetNotice: (name: string) => `确认删除名为【${name}】的目标吗(考虑仔细哦)`,
      searchPlaceholder: '输入名称进行检索',
      toggle: '查看/恢复',
      addTarget: '新建目标',
      targetName: '目标名称',
    },
    team: {
      image: '图片',
      name: '材料名称',
      count: '总需求',
      member: '需求成员',
      analysisTitle: '各成员需求分析图',
      add: '添加成员',
      chooseHero: '选择职业',
      mamberName: '玩家名称',
      split: '全员拆分',
      allMembersRequireAnalysis: '各成员需求分析图',
      deleteTeam: '删除分组',
      deleteTeamDialog: {
        title: '删除确认',
        getDeleteTeamNotice: (name: string) => `确认删除【${name}】分组吗(考虑仔细哦)`,
      },
      deleteMemberDialog: {
        title: '删除确认',
        getDeleteMemberNotice: (team: string, member: string) =>
          `确认删除【${team}】分组成员【${member}】吗`,
      },
      getAddedNotice: {
        panel: (name: string) => `${name}已添加至面板`,
        bag: (name: string) => `${name}已添加至背包`,
        target: (name: string) => `${name}已添加至目标`,
      },
      getSplitTitle: (name: string) => `分组【${name}】全体拆解`,
      searchPlaceholder: '检索',
      save: '存档',
      cache: '缓存',
      panel: '面板',
      target: '目标',
      bag: '背包',
      delete: '删除',
      createDate: '创建日期：',
    },
    activity: {
      newYear: '新年活动',
      april: '愚人节活动',
      summer: '夏日活动',
      halloween: '万圣节活动',
      no: '序号',
      image: '图片',
      name: '名称',
      skin: '皮肤',
      lossWarning: '暂无模型(和谐)',
    },
    hero: {
      image: '图片',
      name: '职业名称',
      skill: '技能(点击切换专属装备)',
      exclusive: '专属装备(点击切换技能)',
    },
    record: {
      refresh: '刷新',
      deleteHistories: '清除存档历史',
      deleteHistoriesDialog: {
        title: '清除存档历史记录',
        content: '确认清除历史记录吗(仅保留最新一条记录)',
      },
      deleteSaveFile: '删除存档记录',
      deleteSaveFileDialog: {
        getTitle: (name: string) => `确认删除存档记录【${name}】吗?`,
        content: '注:【只清除程序内部记录,不会影响存档文件】',
      },
      codes: '存档代码(点击切换历史装备)',
      items: '历史装备(点击切换存档代码)',
      time: '日期',
      operations: '操作',
      copy: '复制',
      getCopySuccessText: (no: number, chunkNum: number) =>
        `复制第${no}条代码${chunkNum ? `【分段${chunkNum}】` : ''}成功!`,
      delete: '删除',
    },
    replay: {
      title: '请拖入录像文件[nwg/w3g](某些录像可能无法解析)',
      copyToClipboard: '点击复制聊天记录图',
      copySuccess: '聊天记录图已复制至剪切板',
    },
    unit: {
      image: '图片',
      name: 'BOSS名称',
      drops: '掉落',
      stage: '阶段',
    },
    footer: {
      thanks: '感谢所有地图支持者^_^',
      split: '拆解',
      analysis: '分析',
      calc: '计算',
      targetSplit: '目标拆解',
      getCopySuccessText: (name: string, chunkNum: number) =>
        `复制存档【${name}】代码${chunkNum ? `【分段${chunkNum}】` : ''}成功!`,
      copy: '复制',
    },
  },
};

export default cnLocal;

/**
 * 黑名单告警数据：安防告警-人员黑名单告警 / 车辆黑名单告警两页的列表、查询过滤与统计。
 * 演示数据与 AlarmsView 内的黑名单记录口径一致，统计数字均由数据算出。
 */
import type { BlacklistAlarmQuery, BlacklistAlarmSummary, PersonnelBlacklistAlarm, VehicleBlacklistAlarm } from '../types/ibms';
import asianMaleImg from '../assets/images/asian_male_portrait_1794054874770.jpg';
import asianFemaleImg from '../assets/images/asian_female_portrait_1794054893192.jpg';
import asianGlassesImg from '../assets/images/asian_man_glasses_1794054909500.jpg';

export const INITIAL_PERSONNEL_BLACKLIST_ALARMS: PersonnelBlacklistAlarm[] = [
    { id: 'bl-1', code: 'B2009OC001DH001', type: '人员黑名单告警', deviceName: '摄像机01', location: 'T1-1F东南角', triggerTime: '2026-11-06 16:00', status: '未处理', snapshot: asianMaleImg },
    { id: 'bl-2', code: 'B2009OC001DH002', type: '人员黑名单告警', deviceName: '摄像机02', location: 'T1-1F西北角', triggerTime: '2026-11-06 14:09', status: '已处理', snapshot: asianFemaleImg },
    { id: 'bl-3', code: 'B2009OC001DH003', type: '人员黑名单告警', deviceName: 'A座主入口闸机A', location: 'T1-1F大堂正门', triggerTime: '2026-11-05 11:20', status: '未处理', snapshot: asianGlassesImg },
    { id: 'bl-4', code: 'B2009OC001DH004', type: '人员黑名单告警', deviceName: '地下车库人行通道', location: 'B1-电梯厅前', triggerTime: '2026-11-05 09:15', status: '已处理', snapshot: asianFemaleImg },
    { id: 'bl-5', code: 'B2009OC001DH005', type: '人员黑名单告警', deviceName: '研发大楼北门摄像机', location: 'T2-1F北侧通道', triggerTime: '2026-11-04 15:40', status: '已处理', snapshot: asianMaleImg },
    { id: 'bl-6', code: 'B2009OC001DH006', type: '人员黑名单告警', deviceName: '访客中心人脸抓拍机', location: 'T1-1F接待大厅', triggerTime: '2026-11-04 10:22', status: '未处理', snapshot: asianGlassesImg },
    { id: 'bl-7', code: 'B2009OC001DH007', type: '人员黑名单告警', deviceName: '货运电梯前室摄像机', location: 'T1-B2卸货区', triggerTime: '2026-11-03 16:50', status: '已处理', snapshot: asianFemaleImg },
    { id: 'bl-8', code: 'B2009OC001DH008', type: '人员黑名单告警', deviceName: '连廊全景摄像机', location: 'T1与T2连廊2F', triggerTime: '2026-11-03 13:10', status: '已处理', snapshot: asianMaleImg },
    { id: 'bl-9', code: 'B2009OC001DH009', type: '人员黑名单告警', deviceName: '东侧围墙球机03', location: '园区东侧边界', triggerTime: '2026-11-02 08:35', status: '未处理', snapshot: asianGlassesImg },
    { id: 'bl-10', code: 'B2009OC001DH010', type: '人员黑名单告警', deviceName: '会议中心VIP通道', location: 'T3-1F贵宾入口', triggerTime: '2026-11-01 19:20', status: '已处理', snapshot: asianFemaleImg },
    { id: 'bl-11', code: 'B2009OC001DH011', type: '人员黑名单告警', deviceName: 'T2首层东大门', location: 'T2-1F大堂正门', triggerTime: '2026-10-31 16:45', status: '已处理', snapshot: asianMaleImg },
    { id: 'bl-12', code: 'B2009OC001DH012', type: '人员黑名单告警', deviceName: '西区员工餐厅通道', location: 'T2-B1餐厅入口', triggerTime: '2026-10-31 12:10', status: '未处理', snapshot: asianGlassesImg },
    { id: 'bl-13', code: 'B2009OC001DH013', type: '人员黑名单告警', deviceName: '高压配电房外巡查机', location: '10kV配电室门前', triggerTime: '2026-10-30 18:25', status: '已处理', snapshot: asianFemaleImg },
    { id: 'bl-14', code: 'B2009OC001DH014', type: '人员黑名单告警', deviceName: '屋顶天台人行出口', location: 'T1-屋顶平台门', triggerTime: '2026-10-30 09:30', status: '未处理', snapshot: asianMaleImg },
    { id: 'bl-15', code: 'B2009OC001DH015', type: '人员黑名单告警', deviceName: '数据中心核心防护区', location: 'T3-3F数据中心门禁', triggerTime: '2026-10-29 21:15', status: '已处理', snapshot: asianGlassesImg },
    { id: 'bl-16', code: 'B2009OC001DH016', type: '人员黑名单告警', deviceName: '行政楼后勤通道', location: 'T1-1F后勤走廊', triggerTime: '2026-10-29 14:00', status: '已处理', snapshot: asianFemaleImg },
    { id: 'bl-17', code: 'B2009OC001DH017', type: '人员黑名单告警', deviceName: '南侧景观庭院人行口', location: '园区南侧人行闸', triggerTime: '2026-10-28 17:50', status: '未处理', snapshot: asianMaleImg },
    { id: 'bl-18', code: 'B2009OC001DH018', type: '人员黑名单告警', deviceName: 'B1多功能宴会厅入口', location: 'T3-B1宴会前厅', triggerTime: '2026-10-28 10:20', status: '已处理', snapshot: asianGlassesImg },
    { id: 'bl-19', code: 'B2009OC001DH019', type: '人员黑名单告警', deviceName: '冷机房外人员抓拍机', location: 'B2制冷站走廊', triggerTime: '2026-10-27 15:10', status: '未处理', snapshot: asianFemaleImg },
    { id: 'bl-20', code: 'B2009OC001DH020', type: '人员黑名单告警', deviceName: '研发大楼5F电梯厅', location: 'T2-5F电梯走廊', triggerTime: '2026-10-27 08:45', status: '已处理', snapshot: asianMaleImg },
    { id: 'bl-21', code: 'B2009OC001DH021', type: '人员黑名单告警', deviceName: '园区西大门侧门', location: '西门人行卡口', triggerTime: '2026-10-26 19:30', status: '已处理', snapshot: asianGlassesImg },
    { id: 'bl-22', code: 'B2009OC001DH022', type: '人员黑名单告警', deviceName: '弱电中心监控室门外', location: 'T1-2F弱电机房', triggerTime: '2026-10-26 11:15', status: '未处理', snapshot: asianFemaleImg },
    { id: 'bl-23', code: 'B2009OC001DH023', type: '人员黑名单告警', deviceName: '地下车库C区电梯前室', location: 'B1-C区电梯厅', triggerTime: '2026-10-25 16:40', status: '已处理', snapshot: asianMaleImg },
    { id: 'bl-24', code: 'B2009OC001DH024', type: '人员黑名单告警', deviceName: '实验室A栋连廊通道', location: 'T3与T2连廊3F', triggerTime: '2026-10-25 13:05', status: '未处理', snapshot: asianGlassesImg },
    { id: 'bl-25', code: 'B2009OC001DH025', type: '人员黑名单告警', deviceName: '档案大楼机密库房门前', location: 'T1-B1档案库室', triggerTime: '2026-10-24 09:20', status: '已处理', snapshot: asianFemaleImg },
];
export const INITIAL_VEHICLE_BLACKLIST_ALARMS: VehicleBlacklistAlarm[] = [
    { id: 'vbl-1', code: 'B2009OC001DH001', type: '车辆黑名单告警', deviceName: '车牌抓拍摄像机01', location: 'T1-B1东南角', plateNo: '京A·88992', triggerTime: '2026-11-06 16:00', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-2', code: 'B2009OC001DH002', type: '车辆黑名单告警', deviceName: '车牌抓拍摄像机01', location: 'T1-B1西北角', plateNo: '沪B·66541', triggerTime: '2026-11-06 14:09', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-3', code: 'B2009OC001DH003', type: '车辆黑名单告警', deviceName: '北门道闸一体机', location: '园区北大门主入口', plateNo: '粤B·99812', triggerTime: '2026-11-05 11:20', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-4', code: 'B2009OC001DH004', type: '车辆黑名单告警', deviceName: '地下车库出入口2', location: 'B2层坡道口', plateNo: '浙A·33219', triggerTime: '2026-11-05 09:15', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-5', code: 'B2009OC001DH005', type: '车辆黑名单告警', deviceName: '南门车牌抓拍机', location: '园区南门岗亭', plateNo: '苏E·55102', triggerTime: '2026-11-04 15:40', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-6', code: 'B2009OC001DH006', type: '车辆黑名单告警', deviceName: '东侧地下车库入口', location: 'T2大厦地库入口', plateNo: '津C·11883', triggerTime: '2026-11-04 10:22', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-7', code: 'B2009OC001DH007', type: '车辆黑名单告警', deviceName: '西门访客车道抓拍', location: 'T3访客停车场', plateNo: '鲁Q·77231', triggerTime: '2026-11-03 16:50', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-8', code: 'B2009OC001DH008', type: '车辆黑名单告警', deviceName: '物流卸货区抓拍摄像机', location: '物流中心B2', plateNo: '川A·88126', triggerTime: '2026-11-03 13:10', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-9', code: 'B2009OC001DH009', type: '车辆黑名单告警', deviceName: '内部环路卡口摄像机', location: '研发楼环路B段', plateNo: '鄂A·66299', triggerTime: '2026-11-02 08:35', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-10', code: 'B2009OC001DH010', type: '车辆黑名单告警', deviceName: 'VIP专用停车位抓拍', location: 'T1贵宾停车场', plateNo: '闽D·55910', triggerTime: '2026-11-01 19:20', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-11', code: 'B2009OC001DH011', type: '车辆黑名单告警', deviceName: '东区货运道闸抓拍机', location: '东侧卸货通道', plateNo: '豫A·99120', triggerTime: '2026-10-31 15:30', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-12', code: 'B2009OC001DH012', type: '车辆黑名单告警', deviceName: 'B1地面临时停车卡口', location: 'T2大厦南广场', plateNo: '湘A·22019', triggerTime: '2026-10-31 11:15', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-13', code: 'B2009OC001DH013', type: '车辆黑名单告警', deviceName: '园区西北卡口', location: '西北角环路卡口', plateNo: '黑A·77116', triggerTime: '2026-10-30 17:40', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-14', code: 'B2009OC001DH014', type: '车辆黑名单告警', deviceName: '充电桩专区抓拍摄像机', location: 'B1新能源充电区', plateNo: '京B·E9921', triggerTime: '2026-10-30 13:00', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-15', code: 'B2009OC001DH015', type: '车辆黑名单告警', deviceName: 'T3地下车库出口闸机', location: 'B2出口通道', plateNo: '沪A·33190', triggerTime: '2026-10-29 18:20', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-16', code: 'B2009OC001DH016', type: '车辆黑名单告警', deviceName: '消防通道违停抓拍机', location: 'T1西侧消防通道', plateNo: '皖A·66120', triggerTime: '2026-10-29 09:45', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-17', code: 'B2009OC001DH017', type: '车辆黑名单告警', deviceName: '高管专用停车区卡口', location: 'T2-B1高管车位', plateNo: '冀A·88321', triggerTime: '2026-10-28 16:10', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-18', code: 'B2009OC001DH018', type: '车辆黑名单告警', deviceName: '临空物流中心卡口', location: '东侧物流主出口', plateNo: '赣A·55122', triggerTime: '2026-10-28 10:35', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-19', code: 'B2009OC001DH019', type: '车辆黑名单告警', deviceName: '南侧坡道入口摄像头', location: 'B1南坡道口', plateNo: '晋A·11090', triggerTime: '2026-10-27 14:15', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-20', code: 'B2009OC001DH020', type: '车辆黑名单告警', deviceName: '主楼VIP环道车牌抓拍', location: 'T1正门环岛', plateNo: '桂A·99381', triggerTime: '2026-10-27 08:50', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-21', code: 'B2009OC001DH021', type: '车辆黑名单告警', deviceName: '园区东门辅助出入口', location: '东门副道闸', plateNo: '陕A·77210', triggerTime: '2026-10-26 17:05', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-22', code: 'B2009OC001DH022', type: '车辆黑名单告警', deviceName: '地下地库机械车位区', location: 'B2-D机械车位', plateNo: '辽A·22901', triggerTime: '2026-10-26 12:40', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-23', code: 'B2009OC001DH023', type: '车辆黑名单告警', deviceName: '北区洗车房通道', location: '北区配套服务区', plateNo: '云A·66311', triggerTime: '2026-10-25 15:20', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-24', code: 'B2009OC001DH024', type: '车辆黑名单告警', deviceName: '西区大楼地下停车场', location: 'T3-B1车库入口', plateNo: '贵A·88109', triggerTime: '2026-10-25 10:00', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=120&auto=format&fit=crop&q=80' },
    { id: 'vbl-25', code: 'B2009OC001DH025', type: '车辆黑名单告警', deviceName: '园区北侧货梯匝道', location: 'T2-B2卸货通道', plateNo: '琼A·55890', triggerTime: '2026-10-24 16:30', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=120&auto=format&fit=crop&q=80' },
];

/**
 * 按触发日期区间过滤人员黑名单告警，并按触发时间倒序排列。
 * 任一日期为空时该条件不过滤。
 */
export function filterPersonnelBlacklistAlarms(
  alarms: PersonnelBlacklistAlarm[],
  query: BlacklistAlarmQuery,
): PersonnelBlacklistAlarm[] {
  return alarms
    .filter((alarm) => {
      const date = alarm.triggerTime.slice(0, 10);
      if (query.startDate && date < query.startDate) return false;
      if (query.endDate && date > query.endDate) return false;
      return true;
    })
    .sort((a, b) => b.triggerTime.localeCompare(a.triggerTime));
}

/**
 * 按触发日期区间与车牌关键字过滤车辆黑名单告警，并按触发时间倒序排列。
 * 车牌为包含匹配；任一条件为空时该条件不过滤。
 */
export function filterVehicleBlacklistAlarms(
  alarms: VehicleBlacklistAlarm[],
  query: BlacklistAlarmQuery,
): VehicleBlacklistAlarm[] {
  const keyword = query.plateNo.trim();
  return alarms
    .filter((alarm) => {
      const date = alarm.triggerTime.slice(0, 10);
      if (keyword && !alarm.plateNo.includes(keyword)) return false;
      if (query.startDate && date < query.startDate) return false;
      if (query.endDate && date > query.endDate) return false;
      return true;
    })
    .sort((a, b) => b.triggerTime.localeCompare(a.triggerTime));
}

/** 由黑名单告警列表汇总统计：告警总数、已处理数与未处理数。 */
export function summarizeBlacklistAlarms(
  alarms: PersonnelBlacklistAlarm[] | VehicleBlacklistAlarm[],
): BlacklistAlarmSummary {
  return {
    total: alarms.length,
    handledCount: alarms.filter((alarm) => alarm.status === '已处理').length,
    unhandledCount: alarms.filter((alarm) => alarm.status === '未处理').length,
  };
}

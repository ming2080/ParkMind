/**
 * 入侵告警数据：安防告警-入侵告警页的列表、查询过滤与统计。
 * 演示数据与 AlarmsView 内的入侵告警记录口径一致，统计数字均由数据算出。
 */
import type { IntrusionAlarm, IntrusionAlarmQuery, IntrusionAlarmSummary } from '../types/ibms';
import asianMaleImg from '../assets/images/asian_male_portrait_1794054874770.jpg';
import asianFemaleImg from '../assets/images/asian_female_portrait_1794054893192.jpg';
import asianGlassesImg from '../assets/images/asian_man_glasses_1794054909500.jpg';

export const INITIAL_INTRUSION_ALARMS: IntrusionAlarm[] = [
    { id: 'int-1', code: 'B2009OC001DH001', type: '入侵告警', deviceName: '入侵感应器', location: 'T1-B1东南角', triggerTime: '2026-11-06 16:00', status: '未处理', snapshot: asianFemaleImg },
    { id: 'int-2', code: 'B2009OC001DH002', type: '入侵告警', deviceName: '入侵感应器', location: 'T1-B1西北角', triggerTime: '2026-11-06 14:09', status: '已处理', snapshot: asianMaleImg },
    { id: 'int-3', code: 'B2009OC001DH003', type: '入侵告警', deviceName: '红外对射探测器01', location: '园区东侧围墙', triggerTime: '2026-11-05 11:20', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'int-4', code: 'B2009OC001DH004', type: '入侵告警', deviceName: '微波周界感应器', location: 'T2大楼屋顶', triggerTime: '2026-11-05 09:15', status: '已处理', snapshot: asianGlassesImg },
    { id: 'int-5', code: 'B2009OC001DH005', type: '入侵告警', deviceName: '双鉴探测器02', location: '地下车库B2区', triggerTime: '2026-11-04 15:40', status: '已处理', snapshot: asianFemaleImg },
    { id: 'int-6', code: 'B2009OC001DH006', type: '入侵告警', deviceName: '激光对射报警器', location: '园区西侧边界', triggerTime: '2026-11-04 10:22', status: '未处理', snapshot: asianMaleImg },
    { id: 'int-7', code: 'B2009OC001DH007', type: '入侵告警', deviceName: '震动光纤传感器', location: '主水泵房外围', triggerTime: '2026-11-03 16:50', status: '已处理', snapshot: asianGlassesImg },
    { id: 'int-8', code: 'B2009OC001DH008', type: '入侵告警', deviceName: '电子围栏控制器', location: '变配电所外墙', triggerTime: '2026-11-03 13:10', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'int-9', code: 'B2009OC001DH009', type: '入侵告警', deviceName: '红外光栅03', location: '贵宾通道北侧', triggerTime: '2026-11-02 08:35', status: '未处理', snapshot: asianFemaleImg },
    { id: 'int-10', code: 'B2009OC001DH010', type: '入侵告警', deviceName: '入侵感应器04', location: '物流卸货平台', triggerTime: '2026-11-01 19:20', status: '已处理', snapshot: asianMaleImg },
    { id: 'int-11', code: 'B2009OC001DH011', type: '入侵告警', deviceName: '室外微波多相雷达', location: '园区北界围栏', triggerTime: '2026-10-31 16:30', status: '已处理', snapshot: asianGlassesImg },
    { id: 'int-12', code: 'B2009OC001DH012', type: '入侵告警', deviceName: '变电站防护栅栏感知器', location: '10kV变压器外防护网', triggerTime: '2026-10-31 11:00', status: '未处理', snapshot: asianFemaleImg },
    { id: 'int-13', code: 'B2009OC001DH013', type: '入侵告警', deviceName: '天台消防门开门报警器', location: 'T2-屋顶平台', triggerTime: '2026-10-30 18:15', status: '已处理', snapshot: asianMaleImg },
    { id: 'int-14', code: 'B2009OC001DH014', type: '入侵告警', deviceName: '红外对射探测器04', location: '园区南侧栏杆', triggerTime: '2026-10-30 13:40', status: '未处理', snapshot: asianGlassesImg },
    { id: 'int-15', code: 'B2009OC001DH015', type: '入侵告警', deviceName: '地下通风井防盗传感器', location: 'B2地下采光井', triggerTime: '2026-10-29 19:20', status: '已处理', snapshot: asianFemaleImg },
    { id: 'int-16', code: 'B2009OC001DH016', type: '入侵告警', deviceName: '激光幕墙探针', location: '数据中心外立面玻璃', triggerTime: '2026-10-29 08:30', status: '已处理', snapshot: asianMaleImg },
    { id: 'int-17', code: 'B2009OC001DH017', type: '入侵告警', deviceName: '双鉴微波探头09', location: 'T1-B1枪库间外走廊', triggerTime: '2026-10-28 17:10', status: '未处理', snapshot: asianGlassesImg },
    { id: 'int-18', code: 'B2009OC001DH018', type: '入侵告警', deviceName: '周边防翻越震动传感缆', location: '西北角竹林围墙', triggerTime: '2026-10-28 10:45', status: '已处理', snapshot: asianFemaleImg },
    { id: 'int-19', code: 'B2009OC001DH019', type: '入侵告警', deviceName: '光纤振动防入侵系统', location: '高压电缆隧道口', triggerTime: '2026-10-27 15:30', status: '未处理', snapshot: asianMaleImg },
    { id: 'int-20', code: 'B2009OC001DH020', type: '入侵告警', deviceName: '红外对射05', location: '园区西侧防护绿化带', triggerTime: '2026-10-27 09:10', status: '已处理', snapshot: asianGlassesImg },
    { id: 'int-21', code: 'B2009OC001DH021', type: '入侵告警', deviceName: '水泵房防越警报器', location: 'T3-B2生活水泵房', triggerTime: '2026-10-26 18:00', status: '已处理', snapshot: asianFemaleImg },
    { id: 'int-22', code: 'B2009OC001DH022', type: '入侵告警', deviceName: '微波周界感应器02', location: 'T1-屋顶冷塔区域', triggerTime: '2026-10-26 12:20', status: '未处理', snapshot: asianMaleImg },
    { id: 'int-23', code: 'B2009OC001DH023', type: '入侵告警', deviceName: '电子围栏前置探测箱', location: '东侧变电站围墙', triggerTime: '2026-10-25 16:15', status: '已处理', snapshot: asianGlassesImg },
    { id: 'int-24', code: 'B2009OC001DH024', type: '入侵告警', deviceName: '红外被动式探针08', location: 'T2-1F财务重地窗外', triggerTime: '2026-10-25 11:30', status: '未处理', snapshot: asianFemaleImg },
    { id: 'int-25', code: 'B2009OC001DH025', type: '入侵告警', deviceName: '高精度红外光栅', location: '园区东北角大门顶', triggerTime: '2026-10-24 14:50', status: '已处理', snapshot: asianMaleImg },
];

/**
 * 按触发日期区间与关键字过滤入侵告警，并按触发时间倒序排列。
 * 关键字匹配设备名称、告警编号或设备位置（包含匹配）；任一条件为空时该条件不过滤。
 */
export function filterIntrusionAlarms(
  alarms: IntrusionAlarm[],
  query: IntrusionAlarmQuery,
): IntrusionAlarm[] {
  const keyword = query.keyword.trim();
  return alarms
    .filter((alarm) => {
      const date = alarm.triggerTime.slice(0, 10);
      if (keyword && !alarm.deviceName.includes(keyword) && !alarm.code.includes(keyword) && !alarm.location.includes(keyword)) return false;
      if (query.startDate && date < query.startDate) return false;
      if (query.endDate && date > query.endDate) return false;
      return true;
    })
    .sort((a, b) => b.triggerTime.localeCompare(a.triggerTime));
}

/** 由入侵告警列表汇总统计：告警总数、已处理数与未处理数。 */
export function summarizeIntrusionAlarms(
  alarms: IntrusionAlarm[],
): IntrusionAlarmSummary {
  return {
    total: alarms.length,
    handledCount: alarms.filter((alarm) => alarm.status === '已处理').length,
    unhandledCount: alarms.filter((alarm) => alarm.status === '未处理').length,
  };
}

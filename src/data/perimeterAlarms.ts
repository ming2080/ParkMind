/**
 * 周界告警数据：安防告警-周界告警页的列表、查询过滤与统计。
 * 演示数据与 AlarmsView 内的周界告警记录口径一致，统计数字均由数据算出。
 */
import type { PerimeterAlarm, PerimeterAlarmQuery, PerimeterAlarmSummary } from '../types/ibms';
import asianMaleImg from '../assets/images/asian_male_portrait_1794054874770.jpg';
import asianFemaleImg from '../assets/images/asian_female_portrait_1794054893192.jpg';
import asianGlassesImg from '../assets/images/asian_man_glasses_1794054909500.jpg';

export const INITIAL_PERIMETER_ALARMS: PerimeterAlarm[] = [
    { id: 'per-1', code: 'B2009OC001DH001', type: '周界告警', deviceName: '周界主机', location: '室外', zone: 'A区', triggerTime: '2026-11-06 16:00', status: '未处理', snapshot: asianFemaleImg },
    { id: 'per-2', code: 'B2009OC001DH002', type: '周界告警', deviceName: '周界主机', location: '室外', zone: 'B区', triggerTime: '2026-11-06 14:09', status: '已处理', snapshot: asianMaleImg },
    { id: 'per-3', code: 'B2009OC001DH003', type: '周界告警', deviceName: '周界脉冲主机01', location: '室外', zone: 'C区', triggerTime: '2026-11-05 11:20', status: '未处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'per-4', code: 'B2009OC001DH004', type: '周界告警', deviceName: '电子围栏控制器', location: '室外', zone: 'D区', triggerTime: '2026-11-05 09:15', status: '已处理', snapshot: asianGlassesImg },
    { id: 'per-5', code: 'B2009OC001DH005', type: '周界告警', deviceName: '红外对射光栅', location: '室外', zone: 'E区', triggerTime: '2026-11-04 15:40', status: '已处理', snapshot: asianFemaleImg },
    { id: 'per-6', code: 'B2009OC001DH006', type: '周界告警', deviceName: '周界主机02', location: '室外', zone: 'F区', triggerTime: '2026-11-04 10:22', status: '未处理', snapshot: asianMaleImg },
    { id: 'per-7', code: 'B2009OC001DH007', type: '周界告警', deviceName: '震动光纤分析仪', location: '室外', zone: 'G区', triggerTime: '2026-11-03 16:50', status: '已处理', snapshot: asianGlassesImg },
    { id: 'per-8', code: 'B2009OC001DH008', type: '周界告警', deviceName: '激光对射报警器', location: '室外', zone: 'H区', triggerTime: '2026-11-03 13:10', status: '已处理', snapshot: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&auto=format&fit=crop&q=80' },
    { id: 'per-9', code: 'B2009OC001DH009', type: '周界告警', deviceName: '周界微波感应器', location: '室外', zone: 'I区', triggerTime: '2026-11-02 08:35', status: '未处理', snapshot: asianFemaleImg },
    { id: 'per-10', code: 'B2009OC001DH010', type: '周界告警', deviceName: '周界主机主站', location: '室外', zone: 'J区', triggerTime: '2026-11-01 19:20', status: '已处理', snapshot: asianMaleImg },
    { id: 'per-11', code: 'B2009OC001DH011', type: '周界告警', deviceName: '高压脉冲前端电子围栏', location: '室外', zone: 'K区', triggerTime: '2026-10-31 15:45', status: '未处理', snapshot: asianGlassesImg },
    { id: 'per-12', code: 'B2009OC001DH012', type: '周界告警', deviceName: '张力围栏控制器', location: '室外', zone: 'L区', triggerTime: '2026-10-31 10:30', status: '已处理', snapshot: asianFemaleImg },
    { id: 'per-13', code: 'B2009OC001DH013', type: '周界告警', deviceName: '周界智能光纤采集盒', location: '室外', zone: 'M区', triggerTime: '2026-10-30 17:15', status: '已处理', snapshot: asianMaleImg },
    { id: 'per-14', code: 'B2009OC001DH014', type: '周界告警', deviceName: '三鉴周界探测器03', location: '室外', zone: 'N区', triggerTime: '2026-10-30 12:40', status: '未处理', snapshot: asianGlassesImg },
    { id: 'per-15', code: 'B2009OC001DH015', type: '周界告警', deviceName: '雷达雷视一体周界终端', location: '室外', zone: 'O区', triggerTime: '2026-10-29 18:50', status: '已处理', snapshot: asianFemaleImg },
    { id: 'per-16', code: 'B2009OC001DH016', type: '周界告警', deviceName: '红外对射报警主机', location: '室外', zone: 'P区', triggerTime: '2026-10-29 09:10', status: '已处理', snapshot: asianMaleImg },
    { id: 'per-17', code: 'B2009OC001DH017', type: '周界告警', deviceName: '微波对射警戒节点', location: '室外', zone: 'Q区', triggerTime: '2026-10-28 16:25', status: '未处理', snapshot: asianGlassesImg },
    { id: 'per-18', code: 'B2009OC001DH018', type: '周界告警', deviceName: '泄漏电缆周界探测器', location: '室外', zone: 'R区', triggerTime: '2026-10-28 11:15', status: '已处理', snapshot: asianFemaleImg },
    { id: 'per-19', code: 'B2009OC001DH019', type: '周界告警', deviceName: '周界脉冲防区主机', location: '室外', zone: 'S区', triggerTime: '2026-10-27 14:40', status: '未处理', snapshot: asianMaleImg },
    { id: 'per-20', code: 'B2009OC001DH020', type: '周界告警', deviceName: '震动传感网关器', location: '室外', zone: 'T区', triggerTime: '2026-10-27 08:30', status: '已处理', snapshot: asianGlassesImg },
    { id: 'per-21', code: 'B2009OC001DH021', type: '周界告警', deviceName: '红外光栅周界节点', location: '室外', zone: 'U区', triggerTime: '2026-10-26 19:10', status: '已处理', snapshot: asianFemaleImg },
    { id: 'per-22', code: 'B2009OC001DH022', type: '周界告警', deviceName: '周界主机03', location: '室外', zone: 'V区', triggerTime: '2026-10-26 13:00', status: '未处理', snapshot: asianMaleImg },
    { id: 'per-23', code: 'B2009OC001DH023', type: '周界告警', deviceName: '微波对射收发机', location: '室外', zone: 'W区', triggerTime: '2026-10-25 17:35', status: '已处理', snapshot: asianGlassesImg },
    { id: 'per-24', code: 'B2009OC001DH024', type: '周界告警', deviceName: '周界防翻越传感器08', location: '室外', zone: 'X区', triggerTime: '2026-10-25 10:15', status: '未处理', snapshot: asianFemaleImg },
    { id: 'per-25', code: 'B2009OC001DH025', type: '周界告警', deviceName: '电子围栏高压控制箱', location: '室外', zone: 'Y区', triggerTime: '2026-10-24 15:25', status: '已处理', snapshot: asianMaleImg },
];

/**
 * 按触发日期区间与关键字过滤周界告警，并按触发时间倒序排列。
 * 关键字匹配设备名称、告警编号、设备位置或入侵区域（包含匹配）；任一条件为空时该条件不过滤。
 */
export function filterPerimeterAlarms(
  alarms: PerimeterAlarm[],
  query: PerimeterAlarmQuery,
): PerimeterAlarm[] {
  const keyword = query.keyword.trim();
  return alarms
    .filter((alarm) => {
      const date = alarm.triggerTime.slice(0, 10);
      if (keyword && !alarm.deviceName.includes(keyword) && !alarm.code.includes(keyword) && !alarm.location.includes(keyword) && !alarm.zone.includes(keyword)) return false;
      if (query.startDate && date < query.startDate) return false;
      if (query.endDate && date > query.endDate) return false;
      return true;
    })
    .sort((a, b) => b.triggerTime.localeCompare(a.triggerTime));
}

/** 由周界告警列表汇总统计：告警总数、已处理数与未处理数。 */
export function summarizePerimeterAlarms(
  alarms: PerimeterAlarm[],
): PerimeterAlarmSummary {
  return {
    total: alarms.length,
    handledCount: alarms.filter((alarm) => alarm.status === '已处理').length,
    unhandledCount: alarms.filter((alarm) => alarm.status === '未处理').length,
  };
}

/**
 * 巡检记录数据：设备巡检-巡检记录页的记录列表、查询过滤与统计。
 * 演示数据与 MaintenanceView 内的巡检记录口径一致，统计数字均由数据算出。
 */
import type { InspectionRecordListItem, InspectionRecordQuery, InspectionRecordSummary } from '../types/ibms';

export const INITIAL_INSPECTION_RECORD_LIST: InspectionRecordListItem[] = [
  { id: 'rec-1', name: '照明月计划', deviceType: '照明设备', type: '月检', planTime: '2026-11-06 16:40', executor: '刘大牛', inspectTime: '2026-11-06 16:40', status: '进行中' },
  { id: 'rec-2', name: '空调月计划', deviceType: '空调设备', type: '月检', planTime: '2026-11-06 16:40', executor: '李小花', inspectTime: '2026-11-06 16:40', status: '进行中' },
  { id: 'rec-3', name: '给排水巡检月计划', deviceType: '给排水设备', type: '月检', planTime: '2026-11-05 10:30', executor: '张海波', inspectTime: '2026-11-05 10:35', status: '已完成' },
  { id: 'rec-4', name: '消防系统季度巡检', deviceType: '消防设备', type: '季检', planTime: '2026-11-04 14:00', executor: '王工', inspectTime: '2026-11-04 14:20', status: '已完成' },
  { id: 'rec-5', name: '变配电日常巡检计划', deviceType: '电气设备', type: '日检', planTime: '2026-11-04 09:00', executor: '李姚明', inspectTime: '2026-11-04 09:10', status: '已完成' },
  { id: 'rec-6', name: '视频监控周巡检计划', deviceType: '安防设备', type: '周检', planTime: '2026-11-03 15:30', executor: '陈工', inspectTime: '2026-11-03 15:45', status: '已完成' },
  { id: 'rec-7', name: '电梯安全月度巡检计划', deviceType: '特种设备', type: '月检', planTime: '2026-11-03 11:00', executor: '赵主管', inspectTime: '2026-11-03 11:15', status: '已完成' },
  { id: 'rec-8', name: '新风机组季度维护计划', deviceType: '暖通设备', type: '季检', planTime: '2026-11-02 13:20', executor: '刘大牛', inspectTime: '2026-11-02 13:40', status: '已完成' },
  { id: 'rec-9', name: '智能门禁半年巡检计划', deviceType: '弱电系统', type: '半年检', planTime: '2026-11-01 09:30', executor: '李小花', inspectTime: '2026-11-01', status: '进行中' },
  { id: 'rec-10', name: '园区夜间综合亮化巡检', deviceType: '照明设备', type: '日检', planTime: '2026-11-01 20:00', executor: '张海波', inspectTime: '2026-11-01', status: '进行中' },
  { id: 'rec-11', name: '高低压配电室日巡检', deviceType: '电气设备', type: '日检', planTime: '2026-11-01 08:30', executor: '李姚明', inspectTime: '2026-11-01 08:45', status: '已完成' },
  { id: 'rec-12', name: '水泵房防汛排涝专项巡检', deviceType: '给排水设备', type: '月检', planTime: '2026-10-31 10:00', executor: '王工', inspectTime: '2026-10-31 10:20', status: '已完成' },
  { id: 'rec-13', name: '冷却塔水质与电机巡检', deviceType: '暖通设备', type: '周检', planTime: '2026-10-30 14:15', executor: '陈工', inspectTime: '2026-10-30 14:30', status: '已完成' },
  { id: 'rec-14', name: '周界红外对射防区巡检', deviceType: '安防设备', type: '月检', planTime: '2026-10-29 09:00', executor: '赵主管', inspectTime: '2026-10-29 09:15', status: '已完成' },
  { id: 'rec-15', name: '应急疏散指示灯专项巡检', deviceType: '消防设备', type: '季检', planTime: '2026-10-28 16:00', executor: '刘大牛', inspectTime: '2026-10-28 16:30', status: '已完成' },
  { id: 'rec-16', name: '弱电机房UPS电源巡检', deviceType: '弱电系统', type: '周检', planTime: '2026-10-27 11:30', executor: '李小花', inspectTime: '2026-10-27 11:45', status: '已完成' },
  { id: 'rec-17', name: '自动人行道闸安全巡检', deviceType: '安防设备', type: '月检', planTime: '2026-10-26 15:00', executor: '张海波', inspectTime: '2026-10-26 15:15', status: '已完成' },
  { id: 'rec-18', name: '楼宇自控DDC控制器巡检', deviceType: '暖通设备', type: '月检', planTime: '2026-10-25 09:20', executor: '陈工', inspectTime: '2026-10-25 09:40', status: '已完成' },
  { id: 'rec-19', name: '光伏发电设备月度巡检', deviceType: '电气设备', type: '月检', planTime: '2026-10-24 14:00', executor: '李姚明', inspectTime: '2026-10-24 14:20', status: '已完成' },
  { id: 'rec-20', name: '气体灭火系统定期巡检', deviceType: '消防设备', type: '半年检', planTime: '2026-10-23 10:30', executor: '王工', inspectTime: '2026-10-23 11:00', status: '已完成' },
  { id: 'rec-21', name: '无负压供水设备巡检', deviceType: '给排水设备', type: '周检', planTime: '2026-10-22 16:10', executor: '刘大牛', inspectTime: '2026-10-22 16:25', status: '已完成' },
  { id: 'rec-22', name: '人脸识别门禁终端巡检', deviceType: '弱电系统', type: '月检', planTime: '2026-10-21 13:40', executor: '李小花', inspectTime: '2026-10-21 13:55', status: '已完成' },
  { id: 'rec-23', name: '客梯扶梯急停按钮测试', deviceType: '特种设备', type: '周检', planTime: '2026-10-20 09:10', executor: '赵主管', inspectTime: '2026-10-20 09:25', status: '已完成' },
  { id: 'rec-24', name: '车库CO传感器校准巡检', deviceType: '弱电系统', type: '季检', planTime: '2026-10-19 15:30', executor: '张海波', inspectTime: '2026-10-19 15:50', status: '已完成' },
  { id: 'rec-25', name: '景观喷泉水泵控制柜巡检', deviceType: '给排水设备', type: '月检', planTime: '2026-10-18 11:00', executor: '陈工', inspectTime: '2026-10-18 11:20', status: '已完成' },
];

/**
 * 按查询条件过滤巡检记录，并按计划巡检时间倒序排列。
 * 执行人为包含匹配；日期范围按计划巡检日期落在区间内判断。
 * 任一条件为空时该条件不过滤。
 */
export function filterInspectionRecords(
  records: InspectionRecordListItem[],
  query: InspectionRecordQuery,
): InspectionRecordListItem[] {
  const keyword = query.executor.trim();
  return records
    .filter((record) => {
      if (keyword && !record.executor.includes(keyword)) return false;
      const planDate = record.planTime.slice(0, 10);
      if (query.startDate && planDate < query.startDate) return false;
      if (query.endDate && planDate > query.endDate) return false;
      return true;
    })
    .sort((a, b) => b.planTime.localeCompare(a.planTime));
}

/**
 * 由巡检记录汇总本月统计：本月以记录中最晚的计划巡检月份为准，
 * 任务总数为当月记录条数，完成数与进行中数按状态分别计数。
 */
export function summarizeInspectionRecords(records: InspectionRecordListItem[]): InspectionRecordSummary {
  if (records.length === 0) {
    return { total: 0, completed: 0, inProgress: 0 };
  }
  const latestMonth = records
    .map((record) => record.planTime.slice(0, 7))
    .sort()
    .pop() as string;
  const monthly = records.filter((record) => record.planTime.startsWith(latestMonth));
  return {
    total: monthly.length,
    completed: monthly.filter((record) => record.status === '已完成').length,
    inProgress: monthly.filter((record) => record.status === '进行中').length,
  };
}

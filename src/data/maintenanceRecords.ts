/**
 * 维保记录数据：设备维保-维保记录页的记录列表、查询过滤与统计。
 * 演示数据与 MaintenanceView 内的维保记录口径一致，统计数字均由数据算出。
 */
import type { MaintenanceRecordListItem, MaintenanceRecordQuery, MaintenanceRecordSummary } from '../types/ibms';

export const INITIAL_MAINTENANCE_RECORD_LIST: MaintenanceRecordListItem[] = [
  { id: 'mrec-1', name: '中央空调末端维保计划', deviceType: '暖通设备', type: '月保', planTime: '2026-11-06 16:40', executor: '刘大牛', inspectTime: '2026-11-06 16:40', status: '进行中' },
  { id: 'mrec-2', name: '变配电系统季度维保', deviceType: '电气设备', type: '季保', planTime: '2026-11-06 16:40', executor: '李小花', inspectTime: '2026-11-06 16:40', status: '进行中' },
  { id: 'mrec-3', name: '消防泵房及喷淋维保', deviceType: '消防设备', type: '月保', planTime: '2026-11-05 10:30', executor: '张海波', inspectTime: '2026-11-05 10:35', status: '已完成' },
  { id: 'mrec-4', name: '智能照明回路维保计划', deviceType: '照明设备', type: '半年保', planTime: '2026-11-04 14:00', executor: '王工', inspectTime: '2026-11-04 14:20', status: '已完成' },
  { id: 'mrec-5', name: '电梯运行安全定期维保', deviceType: '特种设备', type: '月保', planTime: '2026-11-04 09:00', executor: '李姚明', inspectTime: '2026-11-04 09:10', status: '已完成' },
  { id: 'mrec-6', name: '给排水管网及泵站维保', deviceType: '给排水设备', type: '月保', planTime: '2026-11-03 15:30', executor: '陈工', inspectTime: '2026-11-03 15:45', status: '已完成' },
  { id: 'mrec-7', name: '视频监控与门禁系统维保', deviceType: '安防设备', type: '季保', planTime: '2026-11-03 11:00', executor: '赵主管', inspectTime: '2026-11-03 11:15', status: '已完成' },
  { id: 'mrec-8', name: '新风机组滤网更换维保', deviceType: '暖通设备', type: '月保', planTime: '2026-11-02 13:20', executor: '刘大牛', inspectTime: '2026-11-02 13:40', status: '已完成' },
  { id: 'mrec-9', name: '弱电机房精密空调维保', deviceType: '弱电系统', type: '月保', planTime: '2026-11-01 09:30', executor: '李小花', inspectTime: '2026-11-01', status: '进行中' },
  { id: 'mrec-10', name: '园区夜景照明专业维保', deviceType: '照明设备', type: '季保', planTime: '2026-11-01 20:00', executor: '张海波', inspectTime: '2026-11-01', status: '进行中' },
  { id: 'mrec-11', name: '冷水机组深度除垢保养', deviceType: '暖通设备', type: '半年保', planTime: '2026-10-31 10:00', executor: '李姚明', inspectTime: '2026-10-31 10:30', status: '已完成' },
  { id: 'mrec-12', name: '高压柜断路器润滑检修', deviceType: '电气设备', type: '半年保', planTime: '2026-10-30 14:00', executor: '王工', inspectTime: '2026-10-30 14:25', status: '已完成' },
  { id: 'mrec-13', name: '消火栓泵及压力阀测试', deviceType: '消防设备', type: '季保', planTime: '2026-10-29 09:30', executor: '陈工', inspectTime: '2026-10-29 09:50', status: '已完成' },
  { id: 'mrec-14', name: '景观水系循环泵维护', deviceType: '给排水设备', type: '月保', planTime: '2026-10-28 15:10', executor: '赵主管', inspectTime: '2026-10-28 15:30', status: '已完成' },
  { id: 'mrec-15', name: '人行闸机电机与齿轮保养', deviceType: '安防设备', type: '季保', planTime: '2026-10-27 11:00', executor: '刘大牛', inspectTime: '2026-10-27 11:20', status: '已完成' },
  { id: 'mrec-16', name: '核心交换机散热除尘', deviceType: '弱电系统', type: '半年保', planTime: '2026-10-26 16:20', executor: '李小花', inspectTime: '2026-10-26 16:40', status: '已完成' },
  { id: 'mrec-17', name: '消防水箱液位计校准', deviceType: '消防设备', type: '季保', planTime: '2026-10-25 10:00', executor: '张海波', inspectTime: '2026-10-25 10:20', status: '已完成' },
  { id: 'mrec-18', name: '地下车库风机控制箱维保', deviceType: '暖通设备', type: '季保', planTime: '2026-10-24 14:30', executor: '李姚明', inspectTime: '2026-10-24 14:50', status: '已完成' },
  { id: 'mrec-19', name: '光伏逆变器滤波清扫', deviceType: '电气设备', type: '半年保', planTime: '2026-10-23 09:15', executor: '王工', inspectTime: '2026-10-23 09:35', status: '已完成' },
  { id: 'mrec-20', name: '客梯钢丝绳张力与平衡调整', deviceType: '特种设备', type: '季保', planTime: '2026-10-22 13:00', executor: '陈工', inspectTime: '2026-10-22 13:30', status: '已完成' },
  { id: 'mrec-21', name: '弱电综合布线柜整理', deviceType: '弱电系统', type: '年保', planTime: '2026-10-21 15:40', executor: '赵主管', inspectTime: '2026-10-21 16:10', status: '已完成' },
  { id: 'mrec-22', name: '稳压给排水泵加压测试', deviceType: '给排水设备', type: '季保', planTime: '2026-10-20 10:20', executor: '刘大牛', inspectTime: '2026-10-20 10:45', status: '已完成' },
  { id: 'mrec-23', name: '楼宇亮化LED控制器校时', deviceType: '照明设备', type: '月保', planTime: '2026-10-19 19:30', executor: '李小花', inspectTime: '2026-10-19 19:45', status: '已完成' },
  { id: 'mrec-24', name: '机房蓄电池组放电维保', deviceType: '电气设备', type: '半年保', planTime: '2026-10-18 14:00', executor: '张海波', inspectTime: '2026-10-18 14:30', status: '已完成' },
  { id: 'mrec-25', name: '防盗告警探测器灵敏度测试', deviceType: '安防设备', type: '季保', planTime: '2026-10-17 09:00', executor: '陈工', inspectTime: '2026-10-17 09:20', status: '已完成' },
];

/**
 * 按查询条件过滤维保记录，并按计划维保时间倒序排列。
 * 执行人为包含匹配；日期范围按计划维保日期落在区间内判断。
 * 任一条件为空时该条件不过滤。
 */
export function filterMaintenanceRecords(
  records: MaintenanceRecordListItem[],
  query: MaintenanceRecordQuery,
): MaintenanceRecordListItem[] {
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
 * 由维保记录汇总本月统计：本月以记录中最晚的计划维保月份为准，
 * 任务总数为当月记录条数，完成数与进行中数按状态分别计数。
 */
export function summarizeMaintenanceRecords(records: MaintenanceRecordListItem[]): MaintenanceRecordSummary {
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

/**
 * 维保计划数据：设备维保-维保计划页的计划列表、查询过滤与统计。
 * 演示数据与 MaintenanceView 内的维保记录口径一致，统计数字均由数据算出。
 */
import type { MaintenancePlanListItem, MaintenancePlanQuery, MaintenancePlanSummary } from '../types/ibms';

export const INITIAL_MAINTENANCE_PLAN_LIST: MaintenancePlanListItem[] = [
  { id: 'mp-25', name: '防盗告警探测器灵敏度测试', type: '周期计划', deviceType: '安防设备', startDate: '2026-11-09', endDate: '2027-11-09', frequency: '季检', status: '启用', creator: 'admin3' },
  { id: 'mp-24', name: '机房蓄电池组放电维保', type: '周期计划', deviceType: '电气设备', startDate: '2026-11-06', endDate: '2027-11-06', frequency: '半年检', status: '启用', creator: 'admin2' },
  { id: 'mp-23', name: '楼宇亮化LED控制器校时', type: '周期计划', deviceType: '照明设备', startDate: '2026-11-04', endDate: '2027-11-04', frequency: '月检', status: '启用', creator: 'admin1' },
  { id: 'mp-22', name: '稳压给排水泵加压测试', type: '周期计划', deviceType: '给排水设备', startDate: '2026-11-01', endDate: '2027-11-01', frequency: '季检', status: '启用', creator: 'admin4' },
  { id: 'mp-21', name: '弱电综合布线柜整理', type: '周期计划', deviceType: '弱电系统', startDate: '2026-10-25', endDate: '2027-10-25', frequency: '年检', status: '启用', creator: 'admin3' },
  { id: 'mp-20', name: '客梯钢丝绳张力与平衡调整', type: '周期计划', deviceType: '特种设备', startDate: '2026-10-15', endDate: '2027-10-15', frequency: '季检', status: '启用', creator: 'admin2' },
  { id: 'mp-19', name: '光伏逆变器滤波清扫', type: '周期计划', deviceType: '电气设备', startDate: '2026-10-02', endDate: '2027-10-02', frequency: '半年检', status: '启用', creator: 'admin1' },
  { id: 'mp-18', name: '地下车库风机控制箱维保', type: '周期计划', deviceType: '暖通设备', startDate: '2026-09-20', endDate: '2027-09-20', frequency: '季检', status: '启用', creator: 'admin4' },
  { id: 'mp-17', name: '消防水箱液位计校准', type: '周期计划', deviceType: '消防设备', startDate: '2026-09-05', endDate: '2027-09-05', frequency: '季检', status: '启用', creator: 'admin3' },
  { id: 'mp-16', name: '核心交换机散热除尘', type: '周期计划', deviceType: '弱电系统', startDate: '2026-08-22', endDate: '2027-08-22', frequency: '半年检', status: '启用', creator: 'admin2' },
  { id: 'mp-15', name: '人行闸机电机与齿轮保养', type: '周期计划', deviceType: '安防设备', startDate: '2026-08-08', endDate: '2027-08-08', frequency: '季检', status: '启用', creator: 'admin1' },
  { id: 'mp-14', name: '景观水系循环泵维护', type: '周期计划', deviceType: '给排水设备', startDate: '2026-07-19', endDate: '2027-07-19', frequency: '月检', status: '启用', creator: 'admin4' },
  { id: 'mp-13', name: '消火栓泵及压力阀测试', type: '周期计划', deviceType: '消防设备', startDate: '2026-07-05', endDate: '2027-07-05', frequency: '季检', status: '启用', creator: 'admin3' },
  { id: 'mp-12', name: '高压柜断路器润滑检修', type: '周期计划', deviceType: '电气设备', startDate: '2026-06-22', endDate: '2027-06-22', frequency: '半年检', status: '启用', creator: 'admin2' },
  { id: 'mp-11', name: '冷水机组深度除垢保养', type: '周期计划', deviceType: '暖通设备', startDate: '2026-06-08', endDate: '2027-06-08', frequency: '半年检', status: '启用', creator: 'admin1' },
  { id: 'mp-10', name: '园区夜景照明专业维保', type: '周期计划', deviceType: '照明设备', startDate: '2026-05-25', endDate: '2027-05-25', frequency: '季检', status: '启用', creator: 'admin4' },
  { id: 'mp-9', name: '弱电机房精密空调维保', type: '周期计划', deviceType: '弱电系统', startDate: '2026-05-12', endDate: '2027-05-12', frequency: '月检', status: '启用', creator: 'admin2' },
  { id: 'mp-8', name: '新风机组滤网更换维保', type: '周期计划', deviceType: '暖通设备', startDate: '2026-04-20', endDate: '2027-04-20', frequency: '月检', status: '启用', creator: 'admin3' },
  { id: 'mp-7', name: '视频监控与门禁系统维保', type: '周期计划', deviceType: '安防设备', startDate: '2026-04-06', endDate: '2027-04-06', frequency: '季检', status: '启用', creator: 'admin1' },
  { id: 'mp-6', name: '给排水管网及泵站维保', type: '周期计划', deviceType: '给排水设备', startDate: '2026-03-18', endDate: '2027-03-18', frequency: '月检', status: '启用', creator: 'admin4' },
  { id: 'mp-5', name: '电梯运行安全定期维保', type: '周期计划', deviceType: '特种设备', startDate: '2026-03-05', endDate: '2027-03-05', frequency: '月检', status: '启用', creator: 'admin2' },
  { id: 'mp-4', name: '智能照明回路维保计划', type: '周期计划', deviceType: '照明设备', startDate: '2026-02-22', endDate: '2027-02-22', frequency: '半年检', status: '启用', creator: 'admin3' },
  { id: 'mp-3', name: '消防泵房及喷淋维保', type: '周期计划', deviceType: '消防设备', startDate: '2026-02-08', endDate: '2027-02-08', frequency: '月检', status: '启用', creator: 'admin1' },
  { id: 'mp-2', name: '变配电系统季度维保', type: '周期计划', deviceType: '电气设备', startDate: '2026-01-20', endDate: '2027-01-20', frequency: '季检', status: '启用', creator: 'admin2' },
  { id: 'mp-1', name: '中央空调末端维保计划', type: '周期计划', deviceType: '暖通设备', startDate: '2026-01-05', endDate: '2027-01-05', frequency: '月检', status: '启用', creator: 'admin1' },
];

/**
 * 按查询条件过滤维保计划，并按开始日期倒序排列。
 * 名称为包含匹配；类型为精确匹配；日期范围按计划开始日期落在区间内判断。
 * 任一条件为空时该条件不过滤。
 */
export function filterMaintenancePlans(
  plans: MaintenancePlanListItem[],
  query: MaintenancePlanQuery,
): MaintenancePlanListItem[] {
  const keyword = query.name.trim();
  return plans
    .filter((plan) => {
      if (keyword && !plan.name.includes(keyword)) return false;
      if (query.type && plan.type !== query.type) return false;
      if (query.startDate && plan.startDate < query.startDate) return false;
      if (query.endDate && plan.startDate > query.endDate) return false;
      return true;
    })
    .sort((a, b) => b.startDate.localeCompare(a.startDate));
}

/** 由计划列表汇总统计：计划总数与启用中的计划数。 */
export function summarizeMaintenancePlans(plans: MaintenancePlanListItem[]): MaintenancePlanSummary {
  return {
    total: plans.length,
    enabledCount: plans.filter((plan) => plan.status === '启用').length,
  };
}

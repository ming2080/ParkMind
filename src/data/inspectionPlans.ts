/**
 * 巡检计划数据：设备巡检-巡检计划页的计划列表、查询过滤与统计。
 * 演示数据与 MaintenanceView 内的巡检记录口径一致，统计数字均由数据算出。
 */
import type { InspectionPlanListItem, InspectionPlanQuery, InspectionPlanSummary } from '../types/ibms';

export const INITIAL_INSPECTION_PLAN_LIST: InspectionPlanListItem[] = [
  { id: 'ip-25', name: '景观喷泉水泵控制柜巡检', type: '周期计划', deviceType: '给排水设备', startDate: '2026-11-08', endDate: '2027-11-08', frequency: '月检', status: '启用', creator: 'admin3' },
  { id: 'ip-24', name: '车库CO传感器校准巡检', type: '周期计划', deviceType: '弱电系统', startDate: '2026-11-05', endDate: '2027-11-05', frequency: '季检', status: '启用', creator: 'admin2' },
  { id: 'ip-23', name: '客梯扶梯急停按钮测试', type: '周期计划', deviceType: '特种设备', startDate: '2026-11-03', endDate: '2027-11-03', frequency: '周检', status: '启用', creator: 'admin1' },
  { id: 'ip-22', name: '人脸识别门禁终端巡检', type: '周期计划', deviceType: '弱电系统', startDate: '2026-11-01', endDate: '2027-11-01', frequency: '月检', status: '启用', creator: 'admin4' },
  { id: 'ip-21', name: '无负压供水设备巡检', type: '周期计划', deviceType: '给排水设备', startDate: '2026-10-20', endDate: '2027-10-20', frequency: '周检', status: '启用', creator: 'admin3' },
  { id: 'ip-20', name: '气体灭火系统定期巡检', type: '周期计划', deviceType: '消防设备', startDate: '2026-10-10', endDate: '2027-10-10', frequency: '半年检', status: '启用', creator: 'admin2' },
  { id: 'ip-19', name: '光伏发电设备月度巡检', type: '周期计划', deviceType: '电气设备', startDate: '2026-10-01', endDate: '2027-10-01', frequency: '月检', status: '启用', creator: 'admin1' },
  { id: 'ip-18', name: '楼宇自控DDC控制器巡检', type: '周期计划', deviceType: '暖通设备', startDate: '2026-09-15', endDate: '2027-09-15', frequency: '月检', status: '启用', creator: 'admin4' },
  { id: 'ip-17', name: '自动人行道闸安全巡检', type: '周期计划', deviceType: '安防设备', startDate: '2026-09-01', endDate: '2027-09-01', frequency: '月检', status: '启用', creator: 'admin3' },
  { id: 'ip-16', name: '弱电机房UPS电源巡检', type: '周期计划', deviceType: '弱电系统', startDate: '2026-08-18', endDate: '2027-08-18', frequency: '周检', status: '启用', creator: 'admin2' },
  { id: 'ip-15', name: '应急疏散指示灯专项巡检', type: '周期计划', deviceType: '消防设备', startDate: '2026-08-01', endDate: '2027-08-01', frequency: '季检', status: '启用', creator: 'admin1' },
  { id: 'ip-14', name: '周界红外对射防区巡检', type: '周期计划', deviceType: '安防设备', startDate: '2026-07-10', endDate: '2027-07-10', frequency: '月检', status: '启用', creator: 'admin4' },
  { id: 'ip-13', name: '冷却塔水质与电机巡检', type: '周期计划', deviceType: '暖通设备', startDate: '2026-07-01', endDate: '2027-07-01', frequency: '周检', status: '启用', creator: 'admin3' },
  { id: 'ip-12', name: '水泵房防汛排涝专项巡检', type: '周期计划', deviceType: '给排水设备', startDate: '2026-06-15', endDate: '2027-06-15', frequency: '月检', status: '启用', creator: 'admin2' },
  { id: 'ip-11', name: '高低压配电室日巡检', type: '周期计划', deviceType: '电气设备', startDate: '2026-06-01', endDate: '2027-06-01', frequency: '日检', status: '启用', creator: 'admin1' },
  { id: 'ip-10', name: '园区夜间综合亮化巡检', type: '周期计划', deviceType: '照明设备', startDate: '2026-05-20', endDate: '2027-05-20', frequency: '日检', status: '启用', creator: 'admin4' },
  { id: 'ip-9', name: '智能门禁半年巡检计划', type: '周期计划', deviceType: '弱电系统', startDate: '2026-05-01', endDate: '2027-05-01', frequency: '半年检', status: '启用', creator: 'admin2' },
  { id: 'ip-8', name: '新风机组季度维护计划', type: '周期计划', deviceType: '暖通设备', startDate: '2026-04-15', endDate: '2027-04-15', frequency: '季检', status: '启用', creator: 'admin3' },
  { id: 'ip-7', name: '电梯安全月度巡检计划', type: '周期计划', deviceType: '特种设备', startDate: '2026-04-01', endDate: '2027-04-01', frequency: '月检', status: '启用', creator: 'admin1' },
  { id: 'ip-6', name: '视频监控周巡检计划', type: '周期计划', deviceType: '安防设备', startDate: '2026-03-10', endDate: '2027-03-10', frequency: '周检', status: '启用', creator: 'admin4' },
  { id: 'ip-5', name: '变配电日常巡检计划', type: '周期计划', deviceType: '电气设备', startDate: '2026-03-01', endDate: '2027-03-01', frequency: '日检', status: '启用', creator: 'admin2' },
  { id: 'ip-4', name: '消防系统季度巡检', type: '周期计划', deviceType: '消防设备', startDate: '2026-02-15', endDate: '2027-02-15', frequency: '季检', status: '启用', creator: 'admin3' },
  { id: 'ip-3', name: '给排水巡检月计划', type: '周期计划', deviceType: '给排水设备', startDate: '2026-02-01', endDate: '2027-02-01', frequency: '月检', status: '启用', creator: 'admin1' },
  { id: 'ip-2', name: '空调月计划', type: '周期计划', deviceType: '空调设备', startDate: '2026-01-15', endDate: '2027-01-15', frequency: '月检', status: '启用', creator: 'admin2' },
  { id: 'ip-1', name: '照明月计划', type: '周期计划', deviceType: '照明设备', startDate: '2026-01-01', endDate: '2027-01-01', frequency: '月检', status: '启用', creator: 'admin1' },
];

/**
 * 按查询条件过滤巡检计划，并按开始日期倒序排列。
 * 名称为包含匹配；类型为精确匹配；日期范围按计划开始日期落在区间内判断。
 * 任一条件为空时该条件不过滤。
 */
export function filterInspectionPlans(
  plans: InspectionPlanListItem[],
  query: InspectionPlanQuery,
): InspectionPlanListItem[] {
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
export function summarizeInspectionPlans(plans: InspectionPlanListItem[]): InspectionPlanSummary {
  return {
    total: plans.length,
    enabledCount: plans.filter((plan) => plan.status === '启用').length,
  };
}

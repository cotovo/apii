/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import type { AxiosAdapter, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import type { AuthUser } from '@/stores/auth-store'

export const STATIC_SITE_ENABLED =
  import.meta.env.VITE_STATIC_SITE !== 'false'

export const STATIC_SITE_USER: AuthUser = {
  id: 10001,
  username: 'gateway-admin',
  display_name: '玄武API Admin',
  email: 'admin@example.com',
  role: 100,
  status: 1,
  group: 'default',
  quota: 8_000_000_000,
  used_quota: 3_284_000_000,
  request_count: 1_284_620,
  aff_code: 'NEWAPI',
  aff_count: 238,
  aff_quota: 128_000_000,
  aff_history_quota: 356_000_000,
  permissions: {
    sidebar_settings: true,
    admin_permissions: {},
  },
}

const now = Math.floor(Date.now() / 1000)

const vendors = [
  {
    id: 1,
    name: 'OpenAI',
    icon: 'OpenAI',
    description: 'Flagship reasoning, multimodal, and realtime models.',
    status: 1,
    created_time: now - 60 * 60 * 24 * 180,
    updated_time: now - 60 * 60 * 12,
  },
  {
    id: 2,
    name: 'Anthropic',
    icon: 'Claude.Color',
    description: 'Claude model family for long context and reliable writing.',
    status: 1,
    created_time: now - 60 * 60 * 24 * 170,
    updated_time: now - 60 * 60 * 8,
  },
  {
    id: 3,
    name: 'Google',
    icon: 'Gemini.Color',
    description: 'Gemini models for fast multimodal applications.',
    status: 1,
    created_time: now - 60 * 60 * 24 * 160,
    updated_time: now - 60 * 60 * 6,
  },
]

const pricingModels = [
  {
    id: 1,
    model_name: 'claude-sonnet-4-6',
    description: 'Claude Sonnet model for long-context coding, writing, and agent workflows.',
    icon: 'Claude.Color',
    vendor_id: 2,
    vendor_name: 'Anthropic',
    vendor_icon: 'Claude.Color',
    vendor_description: vendors[1].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'claude,sonnet,chat',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 200_000,
    max_output_tokens: 64_000,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools'],
  },
  {
    id: 2,
    model_name: 'claude-opus-4-6',
    description: 'Claude Opus model for complex reasoning, research, and high-quality generation.',
    icon: 'Claude.Color',
    vendor_id: 2,
    vendor_name: 'Anthropic',
    vendor_icon: 'Claude.Color',
    vendor_description: vendors[1].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'claude,opus,reasoning',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 200_000,
    max_output_tokens: 64_000,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools'],
  },
  {
    id: 3,
    model_name: 'claude-opus-4-7',
    description: 'Claude Opus model for advanced analysis and long-form work.',
    icon: 'Claude.Color',
    vendor_id: 2,
    vendor_name: 'Anthropic',
    vendor_icon: 'Claude.Color',
    vendor_description: vendors[1].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'claude,opus,reasoning',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 200_000,
    max_output_tokens: 64_000,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools'],
  },
  {
    id: 4,
    model_name: 'claude-opus-4-8',
    description: 'Claude Opus model for premium reasoning and reliable tool use.',
    icon: 'Claude.Color',
    vendor_id: 2,
    vendor_name: 'Anthropic',
    vendor_icon: 'Claude.Color',
    vendor_description: vendors[1].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'claude,opus,chat',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 200_000,
    max_output_tokens: 64_000,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools'],
  },
  {
    id: 5,
    model_name: 'claude-fable-5',
    description: 'Claude model for creative writing, planning, and high-context generation.',
    icon: 'Claude.Color',
    vendor_id: 2,
    vendor_name: 'Anthropic',
    vendor_icon: 'Claude.Color',
    vendor_description: vendors[1].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'claude,creative,chat',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 200_000,
    max_output_tokens: 64_000,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools'],
  },
  {
    id: 6,
    model_name: 'claude-sonnet-5',
    description: 'Claude Sonnet model for balanced reasoning, coding, and production chat.',
    icon: 'Claude.Color',
    vendor_id: 2,
    vendor_name: 'Anthropic',
    vendor_icon: 'Claude.Color',
    vendor_description: vendors[1].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'claude,sonnet,coding',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 200_000,
    max_output_tokens: 64_000,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools'],
  },
  {
    id: 7,
    model_name: 'gemini-3.1-pro-preview',
    description: 'Gemini Pro preview model for multimodal research and long-context work.',
    icon: 'Gemini.Color',
    vendor_id: 3,
    vendor_name: 'Google',
    vendor_icon: 'Gemini.Color',
    vendor_description: vendors[2].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'gemini,pro,multimodal',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 1_000_000,
    max_output_tokens: 65_536,
    input_modalities: ['text', 'image', 'audio', 'video', 'file'],
    output_modalities: ['text'],
    capabilities: ['streaming', 'vision', 'tools', 'web_search'],
  },
  {
    id: 8,
    model_name: 'gemini-3.5-flash',
    description: 'Gemini Flash model for fast multimodal chat and lightweight agents.',
    icon: 'Gemini.Color',
    vendor_id: 3,
    vendor_name: 'Google',
    vendor_icon: 'Gemini.Color',
    vendor_description: vendors[2].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'gemini,flash,multimodal',
    supported_endpoint_types: ['chat'],
    group_ratio: { default: 1 },
    context_length: 1_000_000,
    max_output_tokens: 65_536,
    input_modalities: ['text', 'image', 'audio', 'video', 'file'],
    output_modalities: ['text'],
    capabilities: ['streaming', 'vision', 'tools'],
  },
  {
    id: 9,
    model_name: 'gpt-5.4',
    description: 'OpenAI flagship model for reasoning, coding, and general-purpose AI apps.',
    icon: 'OpenAI',
    vendor_id: 1,
    vendor_name: 'OpenAI',
    vendor_icon: 'OpenAI',
    vendor_description: vendors[0].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'gpt,reasoning,coding',
    supported_endpoint_types: ['chat', 'responses'],
    group_ratio: { default: 1 },
    context_length: 1_000_000,
    max_output_tokens: 32_768,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools', 'structured_output'],
  },
  {
    id: 10,
    model_name: 'gpt-5.4-mini',
    description: 'OpenAI mini model for efficient chat, tools, and low-latency workflows.',
    icon: 'OpenAI',
    vendor_id: 1,
    vendor_name: 'OpenAI',
    vendor_icon: 'OpenAI',
    vendor_description: vendors[0].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'gpt,mini,chat',
    supported_endpoint_types: ['chat', 'responses'],
    group_ratio: { default: 1 },
    context_length: 1_000_000,
    max_output_tokens: 32_768,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools'],
  },
  {
    id: 11,
    model_name: 'gpt-5.5',
    description: 'OpenAI advanced model for high-quality reasoning and production agents.',
    icon: 'OpenAI',
    vendor_id: 1,
    vendor_name: 'OpenAI',
    vendor_icon: 'OpenAI',
    vendor_description: vendors[0].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'gpt,reasoning,agents',
    supported_endpoint_types: ['chat', 'responses'],
    group_ratio: { default: 1 },
    context_length: 1_000_000,
    max_output_tokens: 32_768,
    input_modalities: ['text', 'image', 'file'],
    output_modalities: ['text'],
    capabilities: ['function_calling', 'streaming', 'vision', 'tools', 'structured_output'],
  },
  {
    id: 12,
    model_name: 'gpt-image-2',
    description: 'OpenAI image generation model for text-to-image and visual creation.',
    icon: 'OpenAI',
    vendor_id: 1,
    vendor_name: 'OpenAI',
    vendor_icon: 'OpenAI',
    vendor_description: vendors[0].description,
    quota_type: 0,
    model_ratio: 0.01,
    completion_ratio: 0.01,
    image_ratio: 0.01,
    enable_groups: ['default'],
    tags: 'gpt,image,generation',
    supported_endpoint_types: ['image-generation'],
    group_ratio: { default: 1 },
    input_modalities: ['text', 'image'],
    output_modalities: ['image'],
    capabilities: ['vision'],
  },
]

const models = pricingModels.map((model) => ({
  id: model.id,
  model_name: model.model_name,
  description: model.description,
  icon: model.icon,
  tags: model.tags,
  vendor_id: model.vendor_id,
  endpoints: JSON.stringify(model.supported_endpoint_types ?? ['chat']),
  status: 1,
  sync_official: 1,
  created_time: now - 60 * 60 * 24 * (40 + model.id),
  updated_time: now - 60 * 60 * model.id,
  name_rule: 0,
  bound_channels: [{ name: `${model.vendor_name} 中转通道`, type: model.vendor_id ?? 1 }],
  enable_groups: model.enable_groups,
  quota_types: [model.quota_type],
}))

const channels = [
  {
    id: 1,
    type: 1,
    key: 'sk-newapi-openai',
    openai_organization: null,
    test_model: 'gpt-4.1',
    status: 1,
    name: 'OpenAI 主通道',
    weight: 100,
    created_time: now - 60 * 60 * 24 * 30,
    test_time: now - 90,
    response_time: 684,
    base_url: 'https://ai.coox.one',
    other: '',
    balance: 250,
    balance_updated_time: now - 60 * 10,
    models: 'gpt-4.1,text-embedding-3-large',
    group: 'default',
    used_quota: 2_785_000_000,
    model_mapping: '',
    status_code_mapping: '',
    priority: 10,
    auto_ban: 1,
    other_info: '',
    tag: 'primary',
    setting: '{}',
    param_override: '',
    header_override: '',
    remark: 'OpenAI-compatible 主力转发通道',
    max_input_tokens: 0,
    channel_info: { is_multi_key: false, multi_key_size: 0, multi_key_polling_index: 0, multi_key_mode: 'random' },
    settings: '{}',
  },
  {
    id: 2,
    type: 14,
    key: 'sk-newapi-claude',
    openai_organization: null,
    test_model: 'claude-sonnet-4',
    status: 1,
    name: 'Claude 备用通道',
    weight: 80,
    created_time: now - 60 * 60 * 24 * 21,
    test_time: now - 160,
    response_time: 812,
    base_url: 'https://ai.coox.one',
    other: '',
    balance: 180,
    balance_updated_time: now - 60 * 18,
    models: 'claude-sonnet-4',
    group: 'vip',
    used_quota: 1_956_000_000,
    model_mapping: '',
    status_code_mapping: '',
    priority: 8,
    auto_ban: 1,
    other_info: '',
    tag: 'writing',
    setting: '{}',
    param_override: '',
    header_override: '',
    remark: 'Claude 模型备用转发通道',
    max_input_tokens: 0,
    channel_info: { is_multi_key: false, multi_key_size: 0, multi_key_polling_index: 0, multi_key_mode: 'random' },
    settings: '{}',
  },
]

const users = [
  {
    ...STATIC_SITE_USER,
    display_name: '玄武API Admin',
    password: '',
    quota: 8_000_000_000,
    used_quota: 3_284_000_000,
    request_count: 1_284_620,
    created_at: now - 60 * 60 * 24 * 120,
    updated_at: now - 60 * 60,
    last_login_at: now - 60 * 12,
    remark: '平台管理员账户',
  },
  {
    id: 10002,
    username: 'api-user',
    display_name: 'API User',
    password: '',
    email: 'user@example.com',
    quota: 2_500_000_000,
    used_quota: 936_000_000,
    request_count: 426_810,
    group: 'default',
    status: 1,
    role: 1,
    created_at: now - 60 * 60 * 24 * 35,
    updated_at: now - 60 * 60 * 3,
    last_login_at: now - 60 * 60 * 2,
    remark: '客户账户样例',
  },
]

const tokens = [
  {
    id: 1,
    name: '生产业务 Key',
    key: 'sk-newapi-********',
    status: 1,
    remain_quota: 3_900_000_000,
    used_quota: 1_100_000_000,
    unlimited_quota: false,
    expired_time: -1,
    created_time: now - 60 * 60 * 24 * 14,
    accessed_time: now - 60 * 30,
    group: 'default',
    cross_group_retry: true,
    model_limits_enabled: false,
    model_limits: '',
    allow_ips: '',
  },
  {
    id: 2,
    name: 'Internal analytics key',
    key: 'sk-static-analytics-********',
    status: 1,
    remain_quota: 5_500_000_000,
    used_quota: 2_320_000_000,
    unlimited_quota: false,
    expired_time: now + 60 * 60 * 24 * 90,
    created_time: now - 60 * 60 * 24 * 8,
    accessed_time: now - 60 * 8,
    group: 'vip',
    cross_group_retry: false,
    model_limits_enabled: true,
    model_limits: 'gpt-4.1,claude-sonnet-4',
    allow_ips: '',
  },
]

const quotaSeries = Array.from({ length: 14 }, (_, index) => {
  const day = now - (13 - index) * 60 * 60 * 24
  return {
    date: new Date(day * 1000).toISOString().slice(0, 10),
    timestamp: day,
    quota: 420_000_000 + index * 36_000_000,
    used_quota: 320_000_000 + index * 28_000_000,
    request_count: 80_000 + index * 11_500,
    username: index % 2 === 0 ? 'gateway-admin' : 'api-user',
  }
})

const flowSeries = quotaSeries.map((item, index) => ({
  ...item,
  input_tokens: 180_000_000 + index * 13_000_000,
  output_tokens: 90_000_000 + index * 9_000_000,
  cache_tokens: 40_000_000 + index * 3_500_000,
}))

const staticNotice = [
  '## 公告',
  '',
  '玄武API新店开业，倍率 **1元=20刀**。',
  '',
  '进微信群获取邀请码，所有模型倍率 **0.01**。',
  '',
  '![玄武API微信群](/qun.jpg)',
].join('\n')

const status = {
  system_name: '玄武API',
  logo: '/logo.png',
  footer_html: '玄武API - Powerful API Management Platform',
  docs_link: '',
  static_site_enabled: false,
  announcements_enabled: true,
  announcements: [
    {
      id: 1,
      title: '玄武API新店开业',
      content: staticNotice,
      publishDate: new Date(now * 1000).toISOString(),
      type: 'info',
    },
  ],
  display_token_stat_enabled: true,
  display_in_currency: false,
  quota_display_type: 'quota',
  quota_per_unit: 500_000,
  usd_exchange_rate: 1,
  custom_currency_symbol: '$',
  custom_currency_exchange_rate: 1,
  register_enabled: true,
  password_login_enabled: true,
  password_register_enabled: true,
  oauth_register_enabled: false,
  passkey_login: false,
  wechat_login: false,
  turnstile_check: false,
  HeaderNavModules: JSON.stringify({
    home: true,
    console: false,
    pricing: { enabled: true, requireAuth: false },
    rankings: { enabled: true, requireAuth: false },
    docs: false,
    about: true,
  }),
}

const ok = <T>(data?: T, extra?: Record<string, unknown>) => ({
  success: true,
  message: '请求成功',
  data,
  ...extra,
})

function list<T>(items: T[], page = 1, pageSize = 10) {
  return {
    items,
    total: items.length,
    page,
    page_size: pageSize,
  }
}

function makeRankings() {
  const getCategory = (index: number) => {
    if (index === 2) return 'multimodal'
    if (index === 1) return 'marketing'
    return 'programming'
  }

  const tokenTotals = [
    96_800_000_000,
    82_400_000_000,
    76_900_000_000,
    69_300_000_000,
    61_700_000_000,
    54_200_000_000,
    49_600_000_000,
    43_900_000_000,
    39_500_000_000,
    33_800_000_000,
    28_600_000_000,
    21_900_000_000,
  ]
  const growthRates = [38, 31, 26, 22, 18, 15, 12, 9, 7, 5, 3, 2]
  const totalModelTokens = tokenTotals.reduce((sum, value) => sum + value, 0)
  const rankedModels = pricingModels.map((model, index) => {
    const total_tokens = tokenTotals[index] ?? 12_000_000_000
    return {
      rank: index + 1,
      previous_rank: index === 0 ? 2 : index,
      model_name: model.model_name,
      vendor: model.vendor_name ?? 'Unknown',
      vendor_icon: model.vendor_icon,
      category: getCategory(index),
      total_tokens,
      share: total_tokens / totalModelTokens,
      growth_pct: growthRates[index] ?? 2,
    }
  })
  const rankedVendors = vendors.map((vendor) => {
    const vendorModels = rankedModels.filter((model) => {
      const source = pricingModels.find((item) => item.model_name === model.model_name)
      return source?.vendor_id === vendor.id
    })
    const total_tokens = vendorModels.reduce(
      (sum, model) => sum + model.total_tokens,
      0
    )
    const topModel = vendorModels[0]?.model_name ?? 'unknown'
    return {
      rank: 0,
      vendor: vendor.name,
      vendor_icon: vendor.icon,
      total_tokens,
      share: total_tokens / totalModelTokens,
      growth_pct: 18,
      models_count: vendorModels.length,
      top_model: topModel,
    }
  })
    .sort((a, b) => b.total_tokens - a.total_tokens)
    .map((vendor, index) => ({
      ...vendor,
      rank: index + 1,
      growth_pct: 24 - index * 5,
    }))
  const buckets = 12
  const modelPoints = Array.from({ length: buckets }).flatMap((_, bucket) =>
    rankedModels.slice(0, 4).map((model, index) => ({
      ts: new Date((now - (buckets - bucket) * 60 * 60 * 6) * 1000).toISOString(),
      label: `${bucket + 1}`,
      model: model.model_name,
      vendor: model.vendor,
      tokens: 1_200_000_000 + bucket * 90_000_000 + index * 180_000_000,
    }))
  )
  const vendorPoints = Array.from({ length: buckets }).flatMap((_, bucket) =>
    rankedVendors.map((vendor, index) => ({
      ts: new Date((now - (buckets - bucket) * 60 * 60 * 6) * 1000).toISOString(),
      label: `${bucket + 1}`,
      vendor: vendor.vendor,
      share: Math.max(0.12, vendor.share + bucket * 0.003 - index * 0.01),
      tokens: 1_800_000_000 + bucket * 140_000_000 + index * 300_000_000,
    }))
  )
  return {
    models: rankedModels,
    vendors: rankedVendors,
    top_movers: rankedModels.slice(0, 3).map((model, index) => ({
      model_name: model.model_name,
      vendor: model.vendor,
      vendor_icon: model.vendor_icon,
      rank_delta: 4 - index,
      current_rank: model.rank,
      growth_pct: model.growth_pct,
    })),
    top_droppers: rankedModels.slice(1, 4).map((model, index) => ({
      model_name: model.model_name,
      vendor: model.vendor,
      vendor_icon: model.vendor_icon,
      rank_delta: -1 - index,
      current_rank: model.rank,
      growth_pct: -4 - index * 3,
    })),
    models_history: {
      points: modelPoints,
      models: rankedModels.map((model) => ({
        name: model.model_name,
        vendor: model.vendor,
        total: model.total_tokens,
      })),
      buckets,
    },
    vendor_share_history: {
      points: vendorPoints,
      vendors: rankedVendors.map((vendor) => ({
        name: vendor.vendor,
        total: vendor.total_tokens,
        share: vendor.share,
      })),
      buckets,
    },
  }
}

function getPath(config: InternalAxiosRequestConfig): string {
  const raw = String(config.url ?? '/')
  try {
    return new URL(raw, 'https://static.local').pathname
  } catch {
    return raw.split('?')[0] || '/'
  }
}

function getParams(config: InternalAxiosRequestConfig): Record<string, unknown> {
  const params: Record<string, unknown> = {}
  const raw = String(config.url ?? '')
  try {
    const url = new URL(raw, 'https://static.local')
    url.searchParams.forEach((value, key) => {
      params[key] = value
    })
  } catch {
    /* empty */
  }
  if (config.params && typeof config.params === 'object') {
    Object.assign(params, config.params as Record<string, unknown>)
  }
  return params
}

function pageParams(config: InternalAxiosRequestConfig) {
  const params = getParams(config)
  return {
    page: Number(params.p ?? params.page ?? 1),
    pageSize: Number(params.page_size ?? params.size ?? 10),
  }
}

function responseFor(config: InternalAxiosRequestConfig): unknown {
  const path = getPath(config)
  const method = String(config.method ?? 'get').toLowerCase()
  const { page, pageSize } = pageParams(config)

  if (path === '/api/user/login') {
    return {
      success: false,
      message: '账号不存在，请先获取邀请码注册。',
    }
  }

  if (path === '/api/user/register') {
    return {
      success: false,
      message: '注册需要邀请码，请进群获取。',
    }
  }

  if (method !== 'get') {
    return ok({ id: 1, affected: 1 }, { message: '操作已提交。' })
  }

  if (path === '/api/status') return ok(status)
  if (path === '/api/setup') return ok({ status: true })
  if (path === '/api/user/self') return ok(STATIC_SITE_USER)
  if (path === '/api/user/self/groups' || path === '/api/group/' || path === '/api/group') {
    return ok({
      default: { desc: '默认用户组', ratio: 1 },
      vip: { desc: '高优先级用户组', ratio: 0.85 },
    })
  }
  if (path === '/api/user/models' || path === '/api/channel/models_enabled') {
    return ok(pricingModels.map((model) => model.model_name))
  }
  if (path === '/api/notice') {
    return ok(staticNotice)
  }
  if (path === '/api/home_page_content') {
    return ok('')
  }
  if (path === '/api/about') {
    return ok('')
  }
  if (path === '/api/user-agreement' || path === '/api/privacy-policy') {
    const title = path.includes('privacy') ? 'Privacy Policy' : 'User Agreement'
    return ok(
      [
        `# ${title}`,
        '',
        '使用玄武API即表示你理解并同意平台的服务条款、额度规则和模型供应商限制。',
        '',
        '请妥善保管 API Key，不要在客户端、公开仓库或日志中泄露密钥。平台会根据实际请求量、模型倍率和分组策略计算额度消耗。',
      ].join('\n')
    )
  }
  if (path === '/api/pricing') {
    return {
      success: true,
      message: '请求成功',
      data: pricingModels,
      vendors,
      group_ratio: { default: 1, vip: 0.85 },
      usable_group: {
        default: { desc: '默认用户组', ratio: 1 },
        vip: { desc: '高优先级用户组', ratio: 0.85 },
      },
      supported_endpoint: {
        chat: 'Chat Completions',
        responses: 'Responses',
        embeddings: 'Embeddings',
      },
      auto_groups: ['default', 'vip'],
    }
  }
  if (path === '/api/rankings') return ok(makeRankings())
  if (path === '/api/models/' || path === '/api/models/search') {
    return ok({ ...list(models, page, pageSize), vendor_counts: { '1': 2, '2': 1, '3': 1 } })
  }
  if (/^\/api\/models\/\d+$/.test(path)) {
    const id = Number(path.split('/').pop())
    return ok(models.find((model) => model.id === id) ?? models[0])
  }
  if (path === '/api/vendors/' || path === '/api/vendors/search') {
    return ok(list(vendors, page, pageSize))
  }
  if (/^\/api\/vendors\/\d+$/.test(path)) {
    const id = Number(path.split('/').pop())
    return ok(vendors.find((vendor) => vendor.id === id) ?? vendors[0])
  }
  if (path === '/api/models/missing') return ok(['gpt-4.1-mini', 'claude-haiku-4'])
  if (path === '/api/prefill_group') {
    return ok([
      { id: 1, name: '热门聊天模型', type: 'model', items: ['gpt-4.1', 'claude-sonnet-4'], description: '常用模型分组' },
      { id: 2, name: '多模态', type: 'tag', items: ['vision', 'multimodal'], description: '多模态能力分组' },
    ])
  }
  if (path === '/api/channel' || path === '/api/channel/search') {
    return ok({ ...list(channels, page, pageSize), type_counts: { '1': 1, '14': 1 } })
  }
  if (/^\/api\/channel\/\d+$/.test(path)) {
    const id = Number(path.split('/').pop())
    return ok(channels.find((channel) => channel.id === id) ?? channels[0])
  }
  if (path === '/api/channel/ops') return ok({ retry_times: 2 })
  if (path === '/api/channel/models') {
    return ok(pricingModels.map((model) => ({ id: model.model_name, object: 'model' })))
  }
  if (path === '/api/channel/tag/models') return ok('gpt-4.1,claude-sonnet-4')
  if (path.startsWith('/api/channel/test')) return ok({ response_time: 720 })
  if (path.startsWith('/api/channel/update_balance')) {
    return { success: true, message: '请求成功', balance: 250, currency: 'USD' }
  }
  if (path.includes('/fetch_models')) return ok(pricingModels.map((model) => model.model_name))
  if (path === '/api/token/' || path === '/api/token/search') return ok(list(tokens, page, pageSize))
  if (/^\/api\/token\/\d+/.test(path)) return ok(tokens[0])
  if (path === '/api/user/' || path === '/api/user/search') return ok(list(users, page, pageSize))
  if (/^\/api\/user\/\d+$/.test(path)) {
    const id = Number(path.split('/').pop())
    return ok(users.find((user) => user.id === id) ?? users[0])
  }
  if (path === '/api/data' || path === '/api/data/self' || path === '/api/data/users') return ok(quotaSeries)
  if (path === '/api/data/flow' || path === '/api/data/flow/self') return ok(flowSeries)
  if (path === '/api/uptime/status') {
    return ok([
      {
        name: 'Static API Gateway',
        status: 'up',
        uptime: 99.98,
        response_time: 124,
        endpoints: [
          { name: 'Chat', status: 'up', response_time: 118 },
          { name: 'Embeddings', status: 'up', response_time: 96 },
        ],
      },
    ])
  }
  if (path === '/api/user/token') return ok({ token: 'sk-newapi-********' })
  if (path === '/api/user/checkin') return ok({ checked: true, quota: 500 })
  if (path === '/api/user/topup/info') {
    return ok({
      amount: 0,
      min_topup: 1,
      topup_group_ratio: { default: 1, vip: 0.85 },
      pay_methods: ['balance'],
    })
  }
  if (path === '/api/user/aff') return ok({ quota: 128_000_000, history_quota: 356_000_000, count: 238 })
  if (path.startsWith('/api/user/topup')) return ok(list([], page, pageSize))
  if (path.startsWith('/api/subscription')) return ok([])
  if (path === '/api/option/' || path.startsWith('/api/option/')) return ok({})
  if (path.startsWith('/api/perf-metrics')) return ok({ items: [], total: 0 })
  if (path.startsWith('/api/log') || path.includes('/log')) return ok({ items: [], total: 0, page, page_size: pageSize })
  if (path.startsWith('/api/system-instance')) return ok({ items: [], total: 0 })
  if (path.startsWith('/api/system-task')) return ok({ items: [], total: 0 })
  if (path.startsWith('/api/deployments')) return ok({ items: [], total: 0, page, page_size: pageSize })
  if (path.startsWith('/api/redemption')) return ok(list([], page, pageSize))
  if (path.startsWith('/api/custom-oauth-provider')) return ok(list([], page, pageSize))
  if (path === '/api/authz/catalog') return ok({ roles: [], permissions: [] })
  if (path === '/api/reset_password' || path === '/api/verification') {
    return {
      success: false,
      message: '验证失败，请稍后重试。',
    }
  }

  return ok(Array.isArray(config.data) ? [] : {})
}

export const staticSiteAdapter: AxiosAdapter = async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 80))
  const data = responseFor(config as InternalAxiosRequestConfig)
  const response: AxiosResponse = {
    data,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: config as InternalAxiosRequestConfig,
  }
  return response
}

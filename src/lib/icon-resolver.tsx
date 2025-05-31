import { 
  Clock, 
  AlertTriangle, 
  DollarSign, 
  Truck, 
  Building2, 
  Briefcase, 
  Zap, 
  BarChart3, 
  RefreshCw,
  Users,
  Workflow,
  FileWarning,
  ArrowRight,
  CheckCircle,
  Bot,
  Target,
  TrendingUp,
  Shield,
  Gauge,
  Mail,
  User,
  Building,
  Globe,
  Phone,
  Download,
  Euro,
  X,
  Loader2,
  Menu,
  ClipboardList,
  Cog,
  type LucideIcon
} from "lucide-react"

// Icon name to component mapping
const iconMap: Record<string, LucideIcon> = {
  // Time and Process Icons
  Clock,
  ClipboardList,
  Cog,
  
  // Problem/Alert Icons
  AlertTriangle,
  FileWarning,
  X,
  
  // Business Icons
  DollarSign,
  BarChart3,
  TrendingUp,
  Target,
  Shield,
  Gauge,
  Bot,
  
  // Industry Icons
  Truck,
  Building2,
  Briefcase,
  Users,
  Building,
  
  // Action Icons
  RefreshCw,
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle,
  
  // Form Icons
  Mail,
  User,
  Globe,
  Phone,
  Download,
  Euro,
  
  // UI Icons
  Loader2,
  Menu,
}

// Helper function to get icon component by name
export function getIconComponent(iconName: string): LucideIcon | null {
  return iconMap[iconName] || null
}

// Helper component to render icon by name
interface IconByNameProps {
  name: string
  className?: string
  size?: number
}

export function IconByName({ name, className, size }: IconByNameProps) {
  const IconComponent = getIconComponent(name)
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`)
    return null
  }
  
  return <IconComponent className={className} size={size} />
}

// Export icon names for type safety
export type IconName = keyof typeof iconMap

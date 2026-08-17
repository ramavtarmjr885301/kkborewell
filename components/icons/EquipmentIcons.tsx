import type { ReactNode, ReactElement } from "react";

type IconProps = { className?: string };

const stroke = "var(--color-well-800)";
const accent = "var(--color-rust-500)";
const fill = "var(--color-aqua-200)";

function Base({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className ?? "h-14 w-14"}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

export function SubmersiblePumpIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="38" y="18" width="24" height="46" rx="6" fill={fill} stroke={stroke} />
            <line x1="42" y1="26" x2="58" y2="26" stroke={stroke} />
            <line x1="42" y1="34" x2="58" y2="34" stroke={stroke} />
            <line x1="42" y1="42" x2="58" y2="42" stroke={stroke} />
            <path d="M38 64 L50 80 L62 64" fill="none" stroke={accent} />
            <line x1="50" y1="80" x2="50" y2="90" stroke={accent} />
        </Base>
    );
}

export function CasingPipeIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="42" y="10" width="16" height="76" fill={fill} stroke={stroke} />
            <line x1="42" y1="24" x2="58" y2="24" stroke={stroke} />
            <line x1="42" y1="40" x2="58" y2="40" stroke={stroke} />
            <line x1="42" y1="56" x2="58" y2="56" stroke={stroke} />
            <line x1="42" y1="72" x2="58" y2="72" stroke={stroke} />
        </Base>
    );
}

export function DrillRigIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <line x1="50" y1="10" x2="50" y2="70" stroke={accent} strokeWidth="4" />
            <rect x="30" y="70" width="40" height="10" rx="2" fill={fill} stroke={stroke} />
            <line x1="35" y1="80" x2="30" y2="90" stroke={stroke} />
            <line x1="65" y1="80" x2="70" y2="90" stroke={stroke} />
            <circle cx="50" cy="14" r="5" fill={fill} stroke={stroke} />
        </Base>
    );
}

export function ControlPanelIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="25" y="18" width="50" height="60" rx="4" fill={fill} stroke={stroke} />
            <circle cx="38" cy="34" r="5" stroke={accent} />
            <circle cx="62" cy="34" r="5" stroke={stroke} />
            <line x1="32" y1="52" x2="68" y2="52" stroke={stroke} />
            <line x1="32" y1="60" x2="68" y2="60" stroke={stroke} />
            <line x1="32" y1="68" x2="55" y2="68" stroke={stroke} />
        </Base>
    );
}

export function LevelSensorIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="30" y="14" width="40" height="55" rx="4" fill={fill} stroke={stroke} />
            <path d="M30 50 Q50 40 70 50 L70 69 L30 69 Z" fill={accent} opacity="0.4" stroke="none" />
            <circle cx="50" cy="30" r="6" stroke={accent} />
            <line x1="50" y1="69" x2="50" y2="86" stroke={stroke} />
        </Base>
    );
}

export function MonoBlockPumpIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="20" y="42" width="34" height="24" rx="4" fill={fill} stroke={stroke} />
            <circle cx="66" cy="54" r="16" fill={fill} stroke={stroke} />
            <circle cx="66" cy="54" r="5" stroke={accent} />
            <line x1="12" y1="54" x2="20" y2="54" stroke={stroke} />
        </Base>
    );
}

export function IndustrialMotorIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="20" y="34" width="46" height="32" rx="4" fill={fill} stroke={stroke} />
            <line x1="26" y1="34" x2="26" y2="66" stroke={stroke} />
            <line x1="34" y1="34" x2="34" y2="66" stroke={stroke} />
            <line x1="42" y1="34" x2="42" y2="66" stroke={stroke} />
            <rect x="66" y="44" width="14" height="12" fill={accent} stroke={stroke} opacity="0.85" />
        </Base>
    );
}

export function RechargePitIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <path d="M20 40 L50 20 L80 40 L80 40 L50 55 Z" fill={fill} stroke={stroke} />
            <rect x="42" y="55" width="16" height="30" fill="none" stroke={stroke} />
            <line x1="42" y1="63" x2="58" y2="63" stroke={accent} />
            <line x1="42" y1="71" x2="58" y2="71" stroke={accent} />
            <line x1="42" y1="79" x2="58" y2="79" stroke={accent} />
        </Base>
    );
}

export function FilterChamberIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="28" y="18" width="44" height="54" rx="6" fill={fill} stroke={stroke} />
            <circle cx="38" cy="30" r="2.5" fill={stroke} stroke="none" />
            <circle cx="48" cy="36" r="2.5" fill={stroke} stroke="none" />
            <circle cx="60" cy="28" r="2.5" fill={stroke} stroke="none" />
            <circle cx="42" cy="46" r="2.5" fill={stroke} stroke="none" />
            <circle cx="58" cy="50" r="2.5" fill={stroke} stroke="none" />
            <path d="M28 60 Q50 68 72 60" stroke={accent} fill="none" />
        </Base>
    );
}

export function EarthingRodIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <line x1="50" y1="12" x2="50" y2="70" stroke={stroke} strokeWidth="3" />
            <path d="M50 70 L42 90 M50 70 L50 90 M50 70 L58 90" stroke={accent} />
            <circle cx="50" cy="12" r="6" fill={fill} stroke={stroke} />
        </Base>
    );
}

export function EarthCableIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <path d="M14 30 Q30 50 14 70" stroke={stroke} fill="none" />
            <path d="M28 24 Q46 50 28 76" stroke={accent} fill="none" />
            <path d="M42 30 Q58 50 42 70" stroke={stroke} fill="none" />
            <circle cx="70" cy="50" r="16" fill={fill} stroke={stroke} />
            <path d="M70 42 L70 50 L76 55" stroke={accent} strokeWidth="2" />
        </Base>
    );
}

export function PipeFittingsIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="14" y="44" width="34" height="12" fill={fill} stroke={stroke} />
            <rect x="52" y="20" width="12" height="34" fill={fill} stroke={stroke} />
            <circle cx="58" cy="60" r="14" fill={fill} stroke={stroke} />
            <circle cx="58" cy="60" r="4" stroke={accent} />
        </Base>
    );
}

export function DeburringToolIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <circle cx="35" cy="65" r="15" fill={fill} stroke={stroke} />
            <line x1="46" y1="54" x2="75" y2="25" stroke={accent} strokeWidth="4" />
            <line x1="70" y1="20" x2="80" y2="30" stroke={stroke} strokeWidth="3" />
        </Base>
    );
}

export function PumpMotorIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <rect x="24" y="30" width="52" height="28" rx="6" fill={fill} stroke={stroke} />
            <circle cx="38" cy="44" r="6" stroke={accent} />
            <line x1="52" y1="36" x2="70" y2="36" stroke={stroke} />
            <line x1="52" y1="44" x2="70" y2="44" stroke={stroke} />
            <line x1="52" y1="52" x2="70" y2="52" stroke={stroke} />
            <path d="M30 58 L30 72 M46 58 L46 72" stroke={stroke} />
        </Base>
    );
}

export function SparesIcon({ className }: IconProps) {
    return (
        <Base className={className}>
            <circle cx="35" cy="40" r="12" fill={fill} stroke={stroke} />
            <circle cx="35" cy="40" r="4" stroke={accent} />
            <path
                d="M35 24 L38 30 L44 28 L43 34 L50 36 L44 39 L47 45 L41 42 L39 48 L35 43"
                fill="none"
                stroke={stroke}
                strokeLinejoin="round"
            />
            <rect x="55" y="55" width="24" height="10" rx="2" fill={fill} stroke={stroke} />
            <rect x="50" y="65" width="34" height="10" rx="2" fill={fill} stroke={stroke} />
        </Base>
    );
}

export const equipmentIcons: Record<string, { Icon: (props: IconProps) => ReactElement; label: string }> = {
    "submersible-pump": { Icon: SubmersiblePumpIcon, label: "Submersible pump" },
    "casing-pipe": { Icon: CasingPipeIcon, label: "Casing pipe" },
    "drill-rig": { Icon: DrillRigIcon, label: "Drill rig" },
    "control-panel": { Icon: ControlPanelIcon, label: "Automation control panel" },
    "level-sensor": { Icon: LevelSensorIcon, label: "Water level sensor" },
    "mono-block-pump": { Icon: MonoBlockPumpIcon, label: "Mono block pump" },
    "industrial-motor": { Icon: IndustrialMotorIcon, label: "Industrial motor" },
    "recharge-pit": { Icon: RechargePitIcon, label: "Recharge pit" },
    "filter-chamber": { Icon: FilterChamberIcon, label: "Filter chamber" },
    "earthing-rod": { Icon: EarthingRodIcon, label: "Earthing rod" },
    "earth-cable": { Icon: EarthCableIcon, label: "Earth cabling" },
    "pipe-fittings": { Icon: PipeFittingsIcon, label: "Pipe fittings" },
    "deburring-tool": { Icon: DeburringToolIcon, label: "Deburring tool" },
    "pump-motor": { Icon: PumpMotorIcon, label: "Pump motor" },
    spares: { Icon: SparesIcon, label: "Spare parts" },
};
"use client";
import { allegationsConfig } from "@server/allegations-config";
export default function Bad() { return <div>{allegationsConfig.password}</div>; }

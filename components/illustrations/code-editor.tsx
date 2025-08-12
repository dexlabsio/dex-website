import * as React from "react";
import Glow from "../ui/glow";
import ReactLogo from "../logos/react";
import Tailwind from "../logos/tailwind";

function CodeEditorIllustration() {
  return (
    <div data-slot="code-editor-illustration" className="h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-[50%] z-10 w-full -translate-x-[50%] translate-y-0">
          <div className="border-border/100 bg-muted dark:border-border/5 dark:border-t-border/15 dark:bg-accent/30 relative flex min-h-[540px] min-w-[460px] flex-col gap-4 rounded-[12px] border">
            <div className="flex w-full items-center justify-start gap-4 overflow-hidden py-2">
              <div className="hidden gap-2 pl-4 lg:flex">
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
              </div>
              <div className="relative flex w-[320px]">
                <div className="text-muted-foreground relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs">
                  <ReactLogo className="size-4" />
                  <p>orders.sql</p>
                </div>
                <div className="text-muted-foreground relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs">
                  <Tailwind className="size-4" />
                  <p>payments.sql</p>
                </div>
                <div className="absolute top-0 left-0 h-full w-[50%] px-2 transition-all duration-1000 ease-in-out group-hover:left-[50%]">
                  <div className="glass-4 h-full w-full rounded-md shadow-md"></div>
                </div>
              </div>
            </div>
            <div className="relative w-full grow overflow-hidden">
              <div className="absolute top-0 left-0 translate-x-0 px-8 transition-all duration-1000 ease-in-out group-hover:translate-x-[-100%] group-hover:opacity-0">
                <pre className="text-muted-foreground font-mono text-xs">
                  <span className="text-muted-foreground">{`{{`}</span>
                  {"\n"}
                  <span className="text-muted-foreground">  </span>
                  <span className="text-brand">config</span>
                  <span className="text-muted-foreground">(</span>
                  {"\n"}
                  <span className="text-muted-foreground">    tags=</span>
                  <span className="text-muted-foreground">[</span>
                  <span className="text-brand-foreground">&apos;operations&apos;</span>
                  <span className="text-muted-foreground">]</span>
                  {"\n"}
                  <span className="text-muted-foreground">  )</span>
                  {"\n"}
                  <span className="text-muted-foreground">{`}}`}</span>
                  {"\n\n\n"}
                  <span className="text-brand">with</span>
                  {"\n\n"}
                  <span className="text-foreground">__orders_cte</span>
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand">as</span>
                  {"\n"}
                  <span className="text-muted-foreground">(</span>
                  {"\n"}
                  <span className="text-muted-foreground">    </span>
                  <span className="text-brand">select</span>
                  {"\n"}
                  <span className="text-muted-foreground">        order_status </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> order_status,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-brand">safe_cast</span>
                  <span className="text-muted-foreground"> (order_delivered_customer_date </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> datetime) </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> order_delivered_customer_date,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-brand">safe_cast</span>
                  <span className="text-muted-foreground"> (order_purchase_timestamp </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> datetime) </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> order_purchase_timestamp,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-brand">safe_cast</span>
                  <span className="text-muted-foreground"> (order_estimated_delivery_date </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> datetime) </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> order_estimated_delivery_date,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-brand">regexp_extract</span>
                  <span className="text-muted-foreground">(customer_id,</span>
                  <span className="text-brand-foreground">r&apos;^.{`{0,3}`}&apos;</span>
                  <span className="text-muted-foreground">) </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> customer_id,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        order_id </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> order_id,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-brand">safe_cast</span>
                  <span className="text-muted-foreground"> (order_delivered_carrier_date </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> datetime) </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> order_delivered_carrier_date,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-brand">safe_cast</span>
                  <span className="text-muted-foreground"> (order_approved_at </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> datetime) </span>
                  <span className="text-brand">as</span>
                  <span className="text-muted-foreground"> order_approved_at</span>
                  {"\n"}
                  <span className="text-muted-foreground">    </span>
                  <span className="text-brand">from</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-muted-foreground">{`{{ `}</span>
                  <span className="text-brand">source</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-brand-foreground">&apos;dex-dsm-ecommerce_landing&apos;</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-brand-foreground">&apos;orders&apos;</span>
                  <span className="text-muted-foreground">) </span>
                  <span className="text-muted-foreground">{`}}`}</span>
                  {"\n"}
                  <span className="text-muted-foreground">)</span>
                  {"\n\n"}
                  <span className="text-brand">select</span>
                  {"\n"}
                  <span className="text-muted-foreground">*</span>
                  {"\n"}
                  <span className="text-brand">from</span>
                  {"\n"}
                  <span className="text-foreground">__orders_cte</span>
                </pre>
              </div>

              <div className="absolute top-0 left-0 translate-x-[100%] px-8 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <pre className="text-muted-foreground font-mono text-xs">
                  <span className="text-muted-foreground">    </span>
                  <span className="text-brand">select</span>
                  {"\n"}
                  <span className="text-muted-foreground">        order_id,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        payment_type,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        payment_value,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        payment_installments,</span>
                  {"\n"}
                  <span className="text-muted-foreground">        payment_sequential</span>
                  {"\n\n"}
                  <span className="text-muted-foreground">    </span>
                  <span className="text-brand">from</span>
                  {"\n"}
                  <span className="text-muted-foreground">        </span>
                  <span className="text-muted-foreground">{`{{ `}</span>
                  <span className="text-brand">source</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-brand-foreground">&apos;dex-dsm-ecommerce_landing&apos;</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-brand-foreground">&apos;order_payments&apos;</span>
                  <span className="text-muted-foreground">) </span>
                  <span className="text-muted-foreground">{`}}`}</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <Glow
          variant="below"
          className="translate-y-32 scale-150 opacity-40 transition-all duration-1000 group-hover:scale-200 group-hover:opacity-60"
        />
      </div>
    </div>
  );
}

export default CodeEditorIllustration;

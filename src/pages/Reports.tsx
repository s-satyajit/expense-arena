import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { ExpenseVisualization } from "@/components/ExpenseVisualization";

export default function Reports() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Reports</h1>
        <div className="space-x-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-3">
          <CardHeader>
            <CardTitle>Annual Report</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ExpenseVisualization />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Expenses</span>
                <span className="font-bold">$12,450</span>
              </div>
              <div className="flex justify-between">
                <span>Average Daily</span>
                <span className="font-bold">$415</span>
              </div>
              <div className="flex justify-between">
                <span>Highest Day</span>
                <span className="font-bold">$1,200</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Food & Dining</span>
                <span className="font-bold">45%</span>
              </div>
              <div className="flex justify-between">
                <span>Transportation</span>
                <span className="font-bold">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Entertainment</span>
                <span className="font-bold">30%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Savings Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Monthly Target</span>
                <span className="font-bold">$2,000</span>
              </div>
              <div className="flex justify-between">
                <span>Current Progress</span>
                <span className="font-bold">$1,500</span>
              </div>
              <div className="flex justify-between">
                <span>Remaining</span>
                <span className="font-bold">$500</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
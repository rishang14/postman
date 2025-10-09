import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Editor from "@monaco-editor/react";
import {
  Clock,
  HardDrive,
  CheckCircle,
  Copy,
  Download,
  Filter,
  MoreHorizontal,
  Code,
  FileText,
  Settings,
  TestTube,
} from "lucide-react";
import { useWorkspace } from "@/lib/store/workspace.store";




const ResponseViewer = () => {
  const [activeTab, setActiveTab] = useState("json");
  const {openedRequest}=useWorkspace(); 

  if(!openedRequest?.requestrun  && !openedRequest?.response)return; 

  const response=openedRequest.response as any; 
  const requestrun=openedRequest.requestrun as any; 
  const getStatusColor = (status?: number): string => {
    const s = typeof status === "number" ? status : 0;
    if (s >= 200 && s < 300) return "text-green-400";
    if (s >= 300 && s < 400) return "text-yellow-400";
    if (s >= 400 && s < 500) return "text-orange-400";
    if (s >= 500) return "text-red-400";
    return "text-gray-400";
  };

  const formatBytes = (bytes?: number): string => {
    if (!bytes || bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const copyToClipboard = (text: string) => {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(text).catch(() => {
      /* ignore */
    });
  };

  // Defensive parse: body may be already an object or invalid JSON
  let responseBody: unknown = {};
  let formattedJsonString = "";
  try {
    const rawBody =  (requestrun as any)?.body;
    if (typeof rawBody === "string") {
      responseBody = rawBody.length ? JSON.parse(rawBody) : rawBody;
    } else {
      responseBody = rawBody ?? {};
    }
    formattedJsonString = JSON.stringify(responseBody, null, 2);
  } catch (e) {
    // If parsing fails, fall back to the raw string
    responseBody =  (requestrun as any)?.body ?? {};
    formattedJsonString =
      typeof responseBody === "string"
        ? responseBody
        : JSON.stringify(responseBody, null, 2);
  }

  const status: number | undefined =
    response?.status ?? requestrun?.status;
  const statusText: string | undefined =
    response?.statusText ?? requestrun?.statusText;
  const duration: number | undefined =
    response?.duration ?? requestrun?.durationMs;
  const size: number | undefined = response.size;
  const rawBody =requestrun?.body;

  return (
    <div className="w-full bg-zinc-950 text-white p-6">
      <div className="w-full mx-auto">
        {/* Status Header */}
        <Card className="bg-zinc-900 border-zinc-800 mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Status:</span>
                  <Badge
                    className={`${getStatusColor(
                      status
                    )} bg-transparent border-current`}
                  >
                    {status ?? "—"} • {statusText ?? ""}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Time:</span>
                  <span className="text-blue-300">
                    {duration ? `${duration} ms` : "—"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Size:</span>
                  <span className="text-green-300">{formatBytes(size)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Response Tabs */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-200">Response Body</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="px-6 border-b border-zinc-800">
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="json"
                    className="bg-transparent data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-gray-400 rounded-t-md rounded-b-none border-b-2 border-transparent data-[state=active]:border-blue-500 px-4 py-2"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    JSON
                  </TabsTrigger>
                  <TabsTrigger
                    value="raw"
                    className="bg-transparent data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-gray-400 rounded-t-md rounded-b-none border-b-2 border-transparent data-[state=active]:border-blue-500 px-4 py-2"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Raw
                  </TabsTrigger>
                  <TabsTrigger
                    value="headers"
                    className="bg-transparent data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-gray-400 rounded-t-md rounded-b-none border-b-2 border-transparent data-[state=active]:border-blue-500 px-4 py-2"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Headers
                    <Badge
                      variant="secondary"
                      className="ml-2 text-xs bg-zinc-700"
                    >
                      {
                        Object.keys(requestrun.headers ?? {})
                          .length
                      }
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="test"
                    className="bg-transparent data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-gray-400 rounded-t-md rounded-b-none border-b-2 border-transparent data-[state=active]:border-blue-500 px-4 py-2"
                  >
                    <TestTube className="w-4 h-4 mr-2" />
                    Test Results
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="json" className="mt-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white bg-zinc-800/50 backdrop-blur-sm"
                      onClick={() => copyToClipboard(formattedJsonString)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="h-96">
                    <Editor
                      height="100%"
                      defaultLanguage="json"
                      value={formattedJsonString}
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        wordWrap: "on",
                        fontFamily:
                          'ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        lineNumbers: "on",
                        glyphMargin: false,
                        folding: true,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 3,
                        renderLineHighlight: "none",
                        scrollbar: {
                          vertical: "auto",
                          horizontal: "auto",
                          verticalScrollbarSize: 8,
                          horizontalScrollbarSize: 8,
                        },
                      }}
                      theme="vs-dark"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="raw" className="mt-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(String(rawBody ?? ""))}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="h-96">
                    <Editor
                      height="100%"
                      defaultLanguage="text"
                      value={String(rawBody ?? "")}
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        fontFamily:
                          'ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        wordWrap: "on",
                        lineNumbers: "on",
                        glyphMargin: false,
                        folding: true,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 3,
                        renderLineHighlight: "none",
                        scrollbar: {
                          vertical: "auto",
                          horizontal: "auto",
                          verticalScrollbarSize: 8,
                          horizontalScrollbarSize: 8,
                        },
                      }}
                      theme="vs-dark"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="headers" className="mt-0">
                <ScrollArea className="h-96">
                  <div className="p-6">
                    <div className="space-y-3">
                      {Object.entries(
                        requestrun.headers ?? {}
                      ).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-start justify-between py-2 border-b border-zinc-800 last:border-b-0"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-blue-300 text-sm">
                              {key}
                            </div>
                            <div className="text-gray-300 text-sm break-all">
                              {value as any}
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white ml-2"
                            onClick={() => copyToClipboard(`${key}: ${value}`)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="test" className="mt-0">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">
                      All tests passed
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                      <span className="text-gray-300">Status code is 200</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                      <span className="text-gray-300">
                        Response time is less than 3000ms
                      </span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                      <span className="text-gray-300">
                        Content-Type is present
                      </span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResponseViewer;
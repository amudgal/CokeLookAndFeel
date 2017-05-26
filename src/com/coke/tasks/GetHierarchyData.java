/**
   Created by : Amit Mudgal (Senior Principal Consultant)
   Created on : 5/23/2017
 * MicroStrategy SDK
 *
 * Copyright © 2017 MicroStrategy Incorporated. All Rights Reserved.
 *
 * MICROSTRATEGY MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE 
 * SUITABILITY OF THIS SAMPLE CODE, EITHER EXPRESS OR IMPLIED, INCLUDING 
 * BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
 * FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. MICROSTRATEGY SHALL NOT 
 * BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, 
 * MODIFYING OR DISTRIBUTING THIS SAMPLE CODE OR ITS DERIVATIVES.
 *
 *
 */

package com.coke.tasks;

import java.util.List;

import com.microstrategy.utils.json.JSONException;
import com.microstrategy.utils.json.JSONObject;
import com.microstrategy.utils.json.XML;
import com.microstrategy.web.beans.BeanContext;
import com.microstrategy.web.beans.BeanFactory;
import com.microstrategy.web.beans.MarkupOutput;
import com.microstrategy.web.beans.ReportBean;
import com.microstrategy.web.beans.RequestKeys;
import com.microstrategy.web.beans.WebBeanException;
import com.microstrategy.web.beans.WebBeanFactory;
import com.microstrategy.web.objects.WebIServerSession;
import com.microstrategy.web.objects.WebObjectsException;
import com.microstrategy.web.objects.WebObjectsFactory;
import com.microstrategy.web.tasks.AbstractBaseTask;
import com.microstrategy.web.tasks.TaskParameterMetadata;
import com.microstrategy.web.tasks.TaskRequestContext;
import com.microstrategy.webapi.EnumDSSXMLResultFlags;

public class GetHierarchyData extends AbstractBaseTask  {
	private static final int PRETTY_PRINT_INDENT_FACTOR = 4;
	private TaskParameterMetadata sessionState;
    public GetHierarchyData() {
        super("This task gets the data for pop up");
        sessionState = addParameterMetadata("SessionState", "Enter valid session state.", true, "");
    }

    public void processRequest(TaskRequestContext context, MarkupOutput out) {
    	 //Get Server Session from Task Params
    	 RequestKeys keys = context.getRequestKeys();	 
    	 System.out.println("Inside the Task");
		 String sessionStateString = keys.getValue("SessionState");
    	 WebObjectsFactory ofactory = WebObjectsFactory.getInstance();
    	 WebIServerSession serverSession = ofactory.getIServerSession();
    	 serverSession.restoreState(sessionStateString);
    	 
    	 //Get Report Data for JSON output
    	 BeanFactory factory = BeanFactory.getInstance();
         ReportBean reportBean = (ReportBean)factory.newBean("ReportBean");
         WebBeanFactory fac = WebBeanFactory.getInstance();
         BeanContext beanContext = fac.newBeanContext();
         reportBean.setSessionInfo(serverSession);
         reportBean.setBeanContext(beanContext);
         reportBean.setResultFlags(EnumDSSXMLResultFlags.DssXmlResultGrid | EnumDSSXMLResultFlags.DssXmlResultRawData);
         //reportBean.setExecutionFlags(2432);
         reportBean.setName("All Hierarchy");
         reportBean.setObjectID("4010A3BE4A1433AB9A0D8FAB65DE95D1");
         reportBean.setExecutionMode(4);
         try {
        	System.out.println("Collecting Data"); 
			reportBean.collectData();
			while(!reportBean.isReady())
			{ Thread.sleep(100);}
			String plainTextData = reportBean.getReportInstance().getPlainTextData();
            //List<HierarchyPOJO> = plainTextData
            	//	.lin
			
			
			
	         System.out.println(plainTextData);
	         String lines[] = plainTextData.split("\\r?\\n");
	         
	         System.out.println(lines.length);
	         //First 4 lines are headers
	         String[] headers = lines[2].split(",");
	         String[] lvl1=null,
	                  lvl2=null,lvl3=null,lvl4=null;
	         for(int i = 3; i < lines.length; i++){
	            for(int j = 0;j < headers.length;j++){
	              lvl1[i-3] = lines[i].split(",")[0];
	            }
	         }
	         
	         String reportDataXML = reportBean.getReportInstance().getResultsAsXML();
	         System.out.println(reportDataXML);
	         JSONObject xmlJSONObj = XML.toJSONObject(reportDataXML);
				//String jsonPrettyPrintString = xmlJSONObj.toString(PRETTY_PRINT_INDENT_FACTOR);
			 //System.out.println(jsonPrettyPrintString);
		} catch (WebBeanException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebObjectsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
         
    }

}